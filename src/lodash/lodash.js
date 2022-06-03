// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /hello route handler)
// •	- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// •	- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

const _ = require('lodash');

const chunk = function(){
    let arrayOfMonth=["January", "February", "March"," April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let size = 3;
    let result = _.chunk(arrayOfMonth, 3)
    console.log(result)
}
chunk()
const tail = function(){
    let x=[3,5,7,9,15,11,13,17,19,21]
    let result= _.tail(x);
    console.log(result)
}
tail()

module.exports.chunk = chunk
module.exports.tail = tail

//  - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them
//  •	- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
 
const union = function(){
    let x =[1,2,3,4,5]
    let y =[3,4,5,6,7]
    let z = _.union(x , y)
    console.log(z)
}
union()
module.exports.union = union

const fromPairs = function(){
    let films=[['horror','The Shining'],
    ['drama','Titanic'],
    ['thriller','Shutter Island'],
    ['fantasy','Pans Labyrinth']]
    let obj=_.fromPairs(films)
    console.log(obj)
}
fromPairs()
module.exports.fromPairs = fromPairs
