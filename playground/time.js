var moment = require('moment');

new Date().getTime();
var someTimeStamp  = moment().valueOf();

console.log(someTimeStamp);
var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('LT'))

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

//10:35 am

