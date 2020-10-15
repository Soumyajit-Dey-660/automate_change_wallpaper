# CHANGING BACKGROUND IMAGE

## INTRODUCTION
This is a simple program written in JavaScript that will download 10 random images using the unsplash API and set the images as the desktop background in 5 minutes interval.

## APPROACH

### LANGUAGE
JavaScript makes it very easy to work with APIs (downloading images) and it is also suitable for OS (changing background image) and fileSystem (saving the images) related work.
As all the functionalities is provided by JavaScript it was an easy decision to pick JS as the language for this application.

### UNSPLASH API - DOWNLOADING IMAGES
Firstly, a developer account is made to work with this API. The Client Access Key and Client Secret is provided at that time which were needed for authentication.
There are several API endpoints for different purposes and for my application I only needed the random image and the downloadable link for that image.

The Client Access Key is placed in a config.ini file for security purposes, then it is read using an iniparser function. "images" folder is now created to place the downloaded images.
Now a GET request is made using axios to the random image API endpoint and the downloadable link for full resolution image is stored in array.
10 images are now downloaded using the downloadable links and renamed using 16 digits random hex value to avoid naming collision and placed in "images" folder. 

### SETTING THE WALLPAPER
An external dependency is added named "wallpaper" to set the wallpaper. Now an interval of 5 minutes is maintained using setInterval and the wallpaper is set using the downloaded files.

SETUP:
-- run "npm i && npm run devStart" to execute the program.
