import requests
import json
import os
from bs4 import BeautifulSoup


def load_config(file_name: str, logging) -> dict:
    """
    Returns the params inside the config file if setted properly, else it will exit.

    :param file_name: path to config.json file
    """
    config_file = open(file_name)
    config = json.load(config_file)
    config_file.close()
    if (
        config["images_dir"] != ""
        and config["url"] != ""
        and config["ammount_images"] > 1
        and config["ammount_images"] < 19
    ):
        logging.info("Config Loaded correctly")
        return config
    else:
        logging.error("Configuration file loading failed")
        logging.info("Read README and check configuration file")
        logging.info("Exiting App")
        exit()


def get_images(config: dict, logging) -> None:
    """
    Function that holds main logic of application, will use params in config  to extract the images in the url provided
    
    :param config: dictionary holding the pair key values of:
    url, folder destination and ammount of images to retrieve.
    """
    try:
        response = requests.get(config["url"])
        logging.info("Connected to webpage: " + config["url"])
    except:
        logging.error(
            "Cannot connect to " + config["url"]
        )
        logging.info("Exiting App")
        exit()

    # Use bs so that we can parse and handle the html 
    soup = BeautifulSoup(response.content, "html.parser")

    # Find the first N meme images on the page (exclude sponsored content)
    ammount_images = config["ammount_images"]
    count = 0

    for img in soup.find_all("img"):
        
        # Discard all img not contained in divs, memes pics are contained by divs
        if img.parent.name != "div":
            continue

        # Now we make sure that the div container has the right attribute for a meme post
        if (
            "resp-media-wrap" not in img.parent["class"]
            and img.parent.parent.parent["class"] != "mu-card mu-z1"
        ):
            continue

        # Some imgs link are stored in data-src or src attribute, so we check first where it is
        img_url = img["src"] if "https:" in img["src"] else img["data-src"]
        img_response = requests.get(img_url)

        # Assign the path for images
        filename = config["images_dir"] + f"{count+1}.jpg"

        # Make sure it exists else we create the folder
        os.makedirs(os.path.dirname(filename), exist_ok=True)

        # Write the downloaded image to the path
        with open(filename, "wb") as f:
            f.write(img_response.content)
            logging.info(f"Extracted and saved image {count+1}.jpg")
        count += 1

        # Once we've reached the desired ammount of memes pics we exit the loop
        if count == ammount_images:
            break
