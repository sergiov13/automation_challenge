import logging
from utils import load_config, get_images

logging.basicConfig(level=logging.INFO)
logging.info('App started')

config = load_config("config.json", logging)

get_images(config, logging)
logging.info('App finished')