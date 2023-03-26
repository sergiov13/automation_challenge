# Testing Suite for Contact Form

The Testing suite should verify the correct fgunctioning of the contact form.

## Creating and running Local Environment

The config file holds the homepage url that will be used for testing.

*Dependencies:*
    **Typescript** \\
    **NodeJS 18** \\
    **npm**\\
    **nodeenv** \\
    **wdio** \\
    **mocha** \\
    **chromedriver** \\

### Locally

First we need to install pipenv if not installed, this will handle our virtual environment and install dependencies. From terminal while being inside the project folder we run the command:
```
    pip3 install pipenv
```
Once finished we'll created the virtual enviroment:
```
    pipenv shell
```
After we have our virtual enviroment created we will install dependencies specified in pipfile, this will create out pipfile.lock.
```
    pipenv install
```
Finally run the app with the command:
```
     npx wdio wdio.conf.ts 
```
### Docker