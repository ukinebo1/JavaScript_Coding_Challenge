// Level 2

// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let grade = 39;
switch (grade) {
  case "A":
    if (grade >= 80 || grade <= 100) {
      console.log("A");
    }
    break;
  case "B":
    if (grade >= 70 || grade <= 79) {
      console.log("B");
    }
    break;
  case "C":
    if (grade >= 60 || grade <= 69) {
      console.log("C");
    }
    break;
  case "D":
    if (grade >= 50 || grade <= 59) {
      console.log("D");
    }
    break;
  case "F":
    if (grade >= 0 || grade <= 49) {
      console.log("F");
    }
    break;
  default:
    console.log("You did not write the exam");
    break;
}
// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer
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
