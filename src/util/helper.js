// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is
// ….. For example - ‘Thorium, W3D1, the topic for today is Nodejs module system’
// Call all these functions in route.js inside the test-me route handler

const printDate = function() {
    console.log("Date" + ":2")

}
const printMonth = function() {
    console.log("Month" + ":June")
}
const getBatchInfo = function() {
    console.log("Radon, W3D1, the topic for today is Nodejs module system")
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batchinfo = getBatchInfo