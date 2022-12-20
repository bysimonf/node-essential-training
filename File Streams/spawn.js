const cp = require('child_process')

const questionApp = cp.spawn('node', ['questions.js'])

questionApp.stdin.write('Simon \n')
questionApp.stdin.write('Munich \n')
questionApp.stdin.write('learning \n')

questionApp.stdout.on('data', data => {
    console.log(`from the question app: ${data}`)
})

questionApp.on('close', () => {
    console.log('questioApp process exited')
})