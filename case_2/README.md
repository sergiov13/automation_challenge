# Testing Suite for Contact Form

The Testing suite should verify the correct fgunctioning of the contact form.

## Creating and running Local Environment

The config file holds the homepage url that will be used for testing.

*Dependencies:*
    **Typescript** \\
    **NodeJS 18** \\
    **npm**\\
    **wdio** \\
    **mocha** \\
    **chromedriver (latest version of chrome)** \\

### Locally

First we need to create a copy from the file url.example.json name it "url.json" and fill it with the homepage url to be used.

After that we need to install the dependencies. From terminal while being inside the project oot folder we run the command:
```
    npm install
```
We can run the test suite with the command:
```
     npx wdio wdio.conf.ts 
```
