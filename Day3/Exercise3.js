// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date = new Date()
console.log(date);
let year =date.getFullYear()
let month =date.getMonth() +1
let day = date.getDay() 
let hr ="0" + date.getHours() 
let min ="0" + date.getMinutes() 
console.log(`${year}-${month}-${day} ${hr}:${min}`)