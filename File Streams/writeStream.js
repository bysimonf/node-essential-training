const fs = require('fs')

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8')

writeStream.write('hello')
writeStream.write(' world\n')

process.stdin.on('data', data => {
    writeStream.write(data)
})

