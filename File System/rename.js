const fs = require('fs')

fs.renameSync('./assets/colors.json', './assets/colorData.json')

fs.rename('./assets/notes.md', './storage-files/notes.md', err => { // <- move and rename the file
    if (err) {
        throw err
    }
})

setTimeout(() => {
    fs.unlinkSync('./assets/alex.jpg') // <- removes file after 4 secs
}, 4000)