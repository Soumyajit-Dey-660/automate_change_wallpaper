const fs = require("fs")
const axios = require('axios')

const downloadImages = async (url, image_path, access_key) => {
    const authorizedURL = url + "?client_id=" + access_key
    await axios({
        method: 'get',
        url: authorizedURL,
        responseType: 'stream', 
    }).then(response => {
        try{
            new Promise((resolve, reject) => {
                // Write the image data from bytestream to the image path
                response.data
                .pipe(fs.createWriteStream(image_path))
                .on('finish', () => resolve())
                .on('error', e => reject(e))
            })
        } catch (err) {
            console.log(err)
        }
    }
    )
}

module.exports = downloadImages