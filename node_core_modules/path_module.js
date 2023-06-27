const path = require('path') //commonJS
//import path from 'path' ES^ Standard

//Base File Name
console.log(path.basename(__filename,"Base Filename"))

//Directory Name
console.log(path.dirname(__filename,"Directory"))

//File extension
console.log(path.extname(__filename),"File extension")

//Path Object
console.log(path.parse(__filename), "Path Object")

//Concatenate paths
//ex : ../test/hello.html
console.log(path.join(__dirname , "test" , "hello.html"))