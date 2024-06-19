// Exercise: Level 2

// 1. Using console.log() print out the following statement:

//     ```sh
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     ```
console.log("There is no exercise better for the heart than reaching down and lifting people up.");
// 2. Using console.log() print out the following quote by Mother Teresa:

//     ```sh
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
//     ```
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num ='10'
let num1 =10
// checking the datatype of num
console.log(typeof(num))
// comparing
console.log(num ===num1)
// converting string num to number
let numInt =parseInt(num)
console.log(num1 ===numInt);


// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numFloat = 9.8
console.log(numFloat === num1);
let newFloat = Math.round(numFloat)
console.log(newFloat);
console.log(typeof(newFloat));
// let numFloatToInt = parseInt(numFloat)
console.log(newFloat ===num1);
// 5. Check if 'on' is found in both python and jargon
let wordCheck = "python jargon"
let newWord=wordCheck.includes("on")
console.log(newWord);
// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
let newPhrase = "I hope this course is not full of jargon"
console.log(newPhrase.includes("jargon"))
// 7. Generate a random number between 0 and 100 inclusively.
const numRand= Math.floor(Math.random () * 101) // creates random number between 0 and 10
console.log(numRand)
// 8. Generate a random number between 50 and 100 inclusively.
// 9. Generate a random number between 0 and 255 inclusively.
const randNum = Math.floor(Math.random() * 256)
console.log(randNum);

// 10. Access the 'JavaScript' string characters using a random number.
let strr = "JavaScript"
let newStrr =Math.floor(Math.random() * strr.length)
// let newStrr = strr.random() 
console.log(newStrr)
// 11. Use console.log() and escape characters to print the following pattern.

//     ```js
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
//     ```

let patternNum = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"
console.log(patternNum)
// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'
let subPhrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(subPhrase.length);
console.log(subPhrase.indexOf("b"));
console.log(subPhrase.lastIndexOf("e"));
let result = subPhrase.substr(31,24)
console.log(result);