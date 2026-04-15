const accountId = 1234
let accountEmail = "amangaud001@gmail.com"
let accountPassword = "1234567890"
let accountCity = "Mumbai"
let accountState = "Maharashtra"
let accountDate;
/* prefer not to use var because of issue in block scope and finantional scope*/
// The console.log() is use to print single variable
console.log(accountId)
// The console.table([]) is use to print multiple varibales in tabular format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountDate])