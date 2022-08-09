


const os = require('os')
//info about current user
console.log(os.userInfo())

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds `)

const http = require('http')


const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.totalmem(),
    totalMem: os.freemem()
}
console.log(currentOS)

