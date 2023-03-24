import logging
from utils import load_config, get_images

config = load_config("config.json")
get_images(config)


