const fs = require('fs')

// sync approach: const text = fs.readFileSync('./assets/Readme.md', 'UTF-8')

fs.readFile('./assets/Readme.md', 'UTF-8', (err, text) => { // <- async approach via callback
    if (err) {
        console.log(`${err.message}`)
        process.exit()
    }
    console.log(text)
})

