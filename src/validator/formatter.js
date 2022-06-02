// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp ’
// - changetoLowerCase() : changes the case of the string to lower. [Call
// toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call
// toUpperCase() on a hardcoded string]
// Call all these functions in route.js inside the test-me route handler

const trim = function(){
    console.log("I am declaring the trim() function.")

}
const changetoLowerCase = function(){
    console.log("THIS FUNCTION CHANGE THESE TEXT TO LOWERCASE.")
}
const changeToUpperCase = function(){
    console.log("this function change these text to uppercase.")
    }
   
    module.exports.trim = trim
    module.exports.CLC = changetoLowerCase
    module.exports.CUC = changeToUpperCase
