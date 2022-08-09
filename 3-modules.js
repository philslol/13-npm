// every file in node is a module
// modules encapsulate code  ( only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alterative-flavour')
console.log(data)


require('./7-mind-grenade')


sayHi(names.john)
sayHi(names.peter)
console.log(names)
