const path = require('path')
const util = require('util')
const v8 = require('v8')

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads') // shows full file path

console.log(dirUploads)

util.log(`The name of the current file: ${path.basename(__filename)}`) // includes date and timestamp

util.log(v8.getHeapStatistics()) // memory usage