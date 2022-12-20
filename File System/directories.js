const fs = require('fs')

fs.readdirSync('./storage-files').forEach(fileName => {
    fs.unlinkSync(`./storage-files/${fileName}`) // <- remove all files first (dir needs to be empty)
})

fs.rmdir('./storage-files', err => {
    if(err) {
        throw err
    }
})