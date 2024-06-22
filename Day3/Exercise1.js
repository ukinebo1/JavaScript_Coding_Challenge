// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Precious"
console.log(typeof(firstName));
let lastName = "Bamawo"
console.log(typeof(lastName));
let country = "Nigeria"
console.log(typeof(country));
let city = "Benin"
console.log(typeof(city));
let age  = 20
console.log(typeof(age));
let isMarried  = true
console.log(typeof(isMarried));
let year = 2024
console.log(typeof(year));
// 2. Check if type of '10' is equal to 10
console.log(typeof('10' === 10));
// 3. Check if parseInt('9.8') is equal to 10
console.log(typeof(parseInt(9.8) == 10));
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
console.log(1 == 1);
console.log(5 == 5);
console.log(-10== -10);
//    2. Write three JavaScript statement which provide falsy value.
console.log(0 ==1);
console.log(5 <=1);
console.log(0 >=1);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3 // true
//    2. 4 >= 3 //true
//    3. 4 < 3 //false
//    4. 4 <= 3 //false
//    5. 4 == 4 //true
//    6. 4 === 4 //true
//    7. 4 != 4 //false
//    8. 4 !== 4 // false
//    9. 4 != '4' //false
//    10. 4 == '4' //true
//    11. 4 === '4' //false
//    12. Find the length of python and jargon and make a falsy comparison statement.
let py = "python".length
let jar = "jargon".length
console.log(py > jar);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log( 4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12);
   console.log( 4 > 3 || 10 < 12);
   console.log( 4 > 3 || 10 > 12 );
   console.log( !(4 > 3) );
   console.log(!(4 < 3));
   console.log(!(false));
   console.log( !(4 > 3 && 10 < 12));
   console.log( !(4 > 3 && 10 > 12));
   console.log( !(4 === '4'));
//    11. There is no 'on' in both dragon and python
let dra ="dragon"
console.log( py.match("on") != dra.match("on"))

// 7. Use the Date object to do the following activities
//    1. What is the year today?
//    2. What is the month today as a number?
//    3. What is the date today?
//    4. What is the day today as a number?
//    5. What is the hours now?
//    6. What is the minutes now?
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
