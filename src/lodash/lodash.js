const _ = require('lodash');
const chunk= function(){
let arrayOfMonth =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
let size = 3;
let result = _.chunk(arrayOfMonth, 3);
console.log(result)
}

 chunk()

 const tail = function(){
     let arrayOfOddNumbrs=[3,5,7,9,11,13,15,19,27,17]
     let x = _.tail(arrayOfOddNumbrs)
     console.log(x)
 }
 tail()

 module.exports.chunk = chunk
 module.exports.tail = tail
 