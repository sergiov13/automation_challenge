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

#### Note: 

The test is mainly developed to run inside chrome but it also supports safari and in the future it can support more browsers. To allow the test to run in safari first go to:
```
    Safari > settings > general > Check the "Show Develop menu in menu bar" checkbox at the bottom of the general tab. 
```

After this, select in the menu bar:
``` 
    Develop > "Allow remote automation".
```
Once we allowed remote automation, we can run the test on safari but safari will prompt an alert everytime asking if it's oka to run automation tests, to disable this prompt we need to run this command on terminal:
```
    $ sudo /usr/bin/safaridriver --enable
```