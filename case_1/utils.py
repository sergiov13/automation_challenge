import requests
import json
import os
from bs4 import BeautifulSoup


def load_config(file_name: str, logging) -> dict:
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
        return {}


def get_images(config: dict, logging) -> None:
    try:
        response = requests.get(config["url"])
        logging.info("Connected to webpage: " + config["url"])
    except:
        logging.error(
            "Cannot connect to " + config["url"] + " please check config file"
        )
        logging.info("Exiting App")
        exit()
    soup = BeautifulSoup(response.content, "html.parser")

    # find the first N meme images on the page (exclude sponsored content)
    ammount_images = config["ammount_images"]
    count = 0

    for img in soup.find_all("img"):
        # Discard all img not contained in divs, memes pics are contained by divs
        if img.parent.name != "div":
            continue

        # Now we make sure that the cdiv container has the right attribute for a meme post
        if (
            "resp-media-wrap" not in img.parent["class"]
            and img.parent.parent.parent["class"] != "mu-card mu-z1"
        ):
            continue

        # Some imgs link are store in data-src or src attribute, so we check first where it is
        img_url = img["src"] if "https:" in img["src"] else img["data-src"]
        img_response = requests.get(img_url)

        # Assign the path for images
        filename = config["images_dir"] + f"{count+1}.jpg"

        # Make sure it exists else we creater the folder
        os.makedirs(os.path.dirname(filename), exist_ok=True)

        # Write the downloaded image to the path
        with open(filename, "wb") as f:
            f.write(img_response.content)
            logging.info(f"Extracted and saved image {count+1}.jpg")
        count += 1

        # Once we've reached the desired ammount of memes pics we exit the loop
        if count == ammount_images:
            break
