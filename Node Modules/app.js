const counter = require('./myModule') // or const { inc, dec, getCount } = require('./myModule')

counter.inc()
counter.inc()
counter.inc()

console.log(counter.getCount())