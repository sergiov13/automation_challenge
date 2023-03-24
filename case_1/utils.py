import requests
import json
import os
from bs4 import BeautifulSoup

def load_config(file_name: str) -> dict:
  config_file = open(file_name)
  config = json.load(config_file)
  config_file.close()
  if config["images_dir"] != "" and config["url"] != "" and config["ammount_images"] > 1 and config["ammount_images"] < 19: 
    print(config)
    return config
  else:
    return config

def get_images(config: dict) -> None:
  print("getting_images")
  response = requests.get(config["url"])
  soup = BeautifulSoup(response.content, 'html.parser')

  # find the first N meme images on the page (exclude sponsored content)
  count = config["ammount_images"]

  for img in soup.find_all('img'):
    print("inside for")
    print(img.parent.name)
    # print(img.parent['class'])
    # print(img.parent.parent.parent.name)
    # print(img.parent.parent.parent["class"])
    # mu-content-card mu-card mu-flush mu-z1 js-post
    # mu-post mu-section
    if img.parent.name != 'div':
      continue
    if img.parent["class"] != 'resp-media-wrap' and "resp-media-wrap" not in img.parent['class'] and (img.parent.parent.parent['class'] != "mu-card mu-z1"):
      continue

    print(img)
    img_url = img['src'] if 'https:' in img['src'] else img['data-src']
    print(img_url)
    img_response = requests.get(img_url)
    
    filename = config["images_dir"] + f"{count+1}.jpg"
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, 'wb') as f:
      f.write(img_response.content)
    count += 1
    if count == 10:
      break
  return True



