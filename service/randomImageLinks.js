const axios = require('axios')

const randomPhotos = async client_id => {
    const photoLinks = [] // Array to store all the downloadable links
    for (let i = 0; i < 10; i++) {
        // Set the url with proper authentication to get any random photo
        const url =
        "https://api.unsplash.com/photos/random/?client_id=" + client_id
        await axios({
            url: url,
            method: 'get',
        })
            .then(response => response.data)
            // Get the full resolution images
            .then(response => photoLinks.push(response.urls.full))
    }
    return photoLinks
}

module.exports = randomPhotos