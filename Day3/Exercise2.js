// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter base", "")
// let height = prompt("Enter height", "")
// let result = base * height * 0.5
// alert(`The area of the triangle is ${result}`)
// console.log(result);
//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```

// 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = parseInt(prompt("Enter side a:"));
let b = parseInt(prompt("Enter side b:"));
let c = parseInt(prompt("Enter side c"));
let res = a + b + c;
alert(`The perimeter of the triangle is ${res}`);
//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```

// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let len = prompt("Enter the length");
let width = prompt("Enter the width");
let area = len * width;
alert(area);
// 1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt("Enter the radius:");
let ans = 3.142 * r * r;
alert(ans);
// 1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// 1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
// 1. Compare the slope of above two questions.
// 1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// 1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hr = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
let earnings = hr * rate;
alert(`Your weekly earning is ${earnings}`);
//     ```sh
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120
//     ```

// 1. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "precious".length;
if (name > 7) {
  console.log("your name is long");
} else {
  console.log("your name is short");
}
// 1. Compare your first name length and your family name length and you should get this output.
let firstName = "Precious";
let firstNameLen = firstName.length;
let lastName = "Bamawo";
let lastNameLen = lastName.length;
if (firstNameLen > lastNameLen) {
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
} else {
  console.log(
    `Your last name, ${lastName} is longer than your first name, ${firstName}`
  );
}
//     ```js
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     ```

//     ```sh
//     Your first name, Asabeneh is longer than your family name, Yetayeh
//     ```

// 1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
let age = myAge - yourAge;
console.log(`I am ${age} years older than you.`);
//    ```js
//    let myAge = 250
//    let yourAge = 25
//    ```

//    ```sh
//    I am 225 years older than you.
//    ```

// 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let normalAge =18
let birth = prompt("Enter birth year:")
let date = new Date()
let year = date.getFullYear()
let newYear =year - birth
let underage = normalAge -newYear
if(newYear > normalAge){
    alert(`You are ${newYear}. You are old enough to drive`)
}else{
    alert(`You are ${newYear}. You will be allowed to drive after ${underage} years.`)
}
//     ```sh

//     Enter birth year: 1995
//     You are 25. You are old enough to drive

//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.
//     ```

// 1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let noOfYears = prompt("Enter number of years you live:")
// let sec = noOfYears.getTime()
// alert(`You lived ${sec} seconds.`)
// let noOfYears = prompt("Enter number of years you live:")
// let sec = noOfYears.getTime()
// alert(`You lived ${sec} seconds.`)
//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```

// 1. Create a human readable time format using the Date time object
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm
let month = date.getMonth()
let hour =date.getHours()
let day =date.getDay()
let min=date.getMinutes()
console.log((`${year}-${month}-${day} ${hour}:${min}`));
console.log((`${day}-${month}-${year} ${hour}:${min}`));
console.log((`${day}/${month}/${year} ${hour}:${min}`));