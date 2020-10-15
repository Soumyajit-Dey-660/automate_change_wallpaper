const fs = require('fs')
const wallpaper = require("wallpaper");

const randomPhotos = require("./service/randomImageLinks")
const iniparser = require("./service/iniParser")
const downloadImages = require("./service/downloadImages")
const genRanHex = require('./service/genRandonHex');

const currentDirectory = process.cwd()
let APP_ACCESS_KEY = ''
let downloadLinks = []
let imageFiles = []


// Setting the wallpaper image
const setWallpaper = async (imagePath) => {
  await wallpaper.set(imagePath);
};

// Get the client access key by reading the config.ini file
try {
  var data = fs.readFileSync(
    `${currentDirectory}/config.ini`,
    "utf8"
  )
  var javascript_ini = iniparser(data)
  APP_ACCESS_KEY = javascript_ini["client"]['access_key']
} catch (e) {
  console.log(e)
}

// Create a folder named "images" where all the downloaded images are going to reside
fs.mkdir("images", (err) => {
  if (err) console.log(err);
  else {
    console.log("Folder images created successfully");
  }
});

// Get downloadable links for 10 random photos
downloadLinks = randomPhotos(APP_ACCESS_KEY)

// Download those 10 photos
downloadLinks.then(async (links) => {
  let imageNo = 0;
  links.forEach(async (url) => {
    /* Set the imagename with randon hex value so that if same picture is downloaded 
    multiple times, the name doesn't collide with each other */
    imageFileName = genRanHex(16) + ".jpg";
    imageFiles.push(imageFileName);
    image_path = currentDirectory + "/images/" + imageFileName;
    await downloadImages(url, image_path, APP_ACCESS_KEY);
  });
  // Wait for the images to download (promise to return)
  await setTimeout(async () => {
  }, 5000);
  // Once the images are downloaded, now change the desktop background after each 5 minutes
  for (let i = 0; i < 10; i++) {
    await setInterval(async () => {
      await setWallpaper(`${currentDirectory}/images/${imageFiles[imageNo]}`);
      imageNo = (imageNo + 1) % 10;
    }, 300000); // 5 minutes = 5 x 60 x 1000 ms = 3,00,000 ms
  }
})


