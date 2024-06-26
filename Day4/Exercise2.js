// Level 2

// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let scores = 64;
switch (true) {
  case scores >= 80:
    console.log("Grade A");
    break;
  case scores >= 70:
    console.log("Grade B");
    break;
  case scores >= 60:
    console.log("Grade C");
    break;
  case scores >= 50:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
    break;
}
// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

let user = prompt("Enter month");
let month = user.toLowerCase();
let autumn = ["September", "October", "november"];
let spring = ["march", "april", "may"];
let winter = ["december", "january", "february"];
let summer = ["june", "july", "august"];

switch (month) {
  case "september":
  case "october":
  case "novermber":
    alert("the season is Autumn");
    console.log("the season is Autumn");
    break;
  case "march":
  case "april":
  case "may":
    alert("the season is Spring");
    console.log("the season is Spring");
    break;
  case "december":
  case "january":
  case "february":
    alert("the season is Winter");
    console.log("the season is Winter");
    break;
  case "june":
  case "july":
  case "august":
    alert("the season is Summer");
    console.log("the season is Summer");
    break;
  default:
    alert("invalid month");
}
// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
// //   ```

let userInput = prompt("Enter a day:");
let day = userInput.toLowerCase();
switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert(`${day} is a working day`);
    console.log(`${day} is a working day`);
    break;
  case "saturday":
  case "sunday":
    alert(`${day} is a weekend`);
    console.log(`${day} is a weekend`);
    break;
  default:
    alert("invalid day");
    console.log("invalid day");
}
