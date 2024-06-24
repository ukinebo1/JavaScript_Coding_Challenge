// Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```
let userAge = prompt("Enter your age:");
let date = new Date();
let year = date.getFullYear();
let eligibility = year - userAge;
let baseAge = 18;
let nonEligibility = baseAge - eligibility;
if (eligibility > baseAge) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${nonEligibility} years to drive.`);
}

// 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```
let yourAge = prompt("Enter your age:");
// let usersAge = date.getFullYear
let myAge = 30;
let newAge = yourAge - myAge;
let reAge = myAge - yourAge;

if (yourAge > myAge) {
  console.log(`You are ${newAge} years older than me.`);
} else {
  console.log(`I am ${reAge} years older than you`);
}
// 1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
//       let a = 4
//       let b = 3
//     ```

//     ```sh
//       4 is greater than 3
//     ```
let a = 4;
let b = 7;
if(a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is higher than ${a}`);
}
let res = (a>b)?`${a} is greater than ${b}`:`${b} is higher than ${a}`
console.log(res);
// 1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt("Enter a number:")
if(num % 2 ==0){
   console.log(`${num} is an even number`); 
}else{
   console.log(`${num} is is an odd number.`); 
}
//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number.
//     ```
