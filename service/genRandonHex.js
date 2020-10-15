/* Generate random hex for the image filenames so that no 
  two images has the same filename */
  
const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")

module.exports = genRanHex