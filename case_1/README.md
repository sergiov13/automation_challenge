# Scrapping Images from cheezburger

The app required to extraxt 10 images from the website cheezburger. The images should be of meme posts and not advertisments.
Currently the app only supports the website cheezburger, but it can easily be scaled up to support other webites by adding another function tailored to the new website.

## Creating and running Local Environment

The config .json file holds the params required to run this app.

**url**: The url of the website to be scrappe.
**images_dir**: The path that will be used to store the images, thw app will create it if it doesnt exists.
**ammount_images**: How many images will be extracted from the website, the cheezburger website only holds up to 19 images per page, so the app will verify that we are within the minimum (1 image) or maximum (19 images) limits.

*Dependencies:*
    **Python3.9** \\
    **pipenv** \\
    **beautiful Soup (bs4)** \\
    **requests** 

### Locally

First we need to install pipenv if not installed, this will handle our virtual environment and install dependencies. From terminal while being inside the project folder we run the command:
```
    pip3 install pipenv
```
Once finished well created the virtual enviroment:
```
    pipenv shell
```
After we have our virtual enviroment created we will install dependencies specified in pipfile, this will create out pipfile.lock.
```
    pipenv install
```
Finally run the app with the command:
```
    python3 app.py
```
### Docker