// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp ’
// - changetoLowerCase() : changes the case of the string to lower. [Call
// toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call
// toUpperCase() on a hardcoded string]
// Call all these functions in route.js inside the test-me route handler

let hey = "   My name is Chinmaya Sahoo       "
const trim = function(){
    console.log(hey.trim())
}
const lowerCase= function(){
    console.log(hey.toLowerCase())
}

const upperCase = function(){
    console.log(hey.toUpperCase())
}

module.exports.trim=trim
module.exports.lowercase=lowerCase
module.exports.upperCase=upperCase
