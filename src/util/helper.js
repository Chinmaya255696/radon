// printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is
// ….. For example - ‘Thorium, W3D1, the topic for today is Nodejs module system’
// Call all these functions in route.js inside the test-me route handler

const printDate = function(){
    currentDate= new Date();
    console.log(currentDate)
}

const printMonth = function(){
    currentDate = new Date();
    currentMonth = currentDate.getMonth()
    console.log(currentMonth)
}

const getBatchInfo = function(){
    console.log("Radium, W2D13, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo