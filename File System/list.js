const fs = require('fs')

// const files = fs.readdirSync('./assets') <- sync function

fs.readdir('./assets', (err, files) => { // <- async approach via callback
    if (err) {
        throw err
    }
    console.log(files)
})

