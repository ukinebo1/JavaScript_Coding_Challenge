//  Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
 let challenge = "30 Days Of JavaScript"
// 2. Print the string on the browser console using __console.log()__
console.log(challenge);
// 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length);
// 4. Change all the string characters to capital letters using __toUpperCase()__ method
let challengeUpper = challenge.toUpperCase()
console.log(challengeUpper);
// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
let challengeLower = challenge.toLowerCase()
console.log(challengeLower);
// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
let challengeSubstr = challenge.substr(0,2)
console.log(challengeSubstr);
let challengeSubString = challenge.substring(0,3)
console.log(challengeSubString);
// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
let challengePhrase =challenge.substring(3, 22)
console.log(challengePhrase);
// 8. Check if the string contains a word __Script__ using __includes()__ method
let challengeIncludes = challenge.includes("Script")
console.log(challengeIncludes)
// 9. Split the __string__ into an __array__ using __split()__ method
let challengeSplit = challenge.split(",")
console.log(challengeSplit)
// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
let challengeSplitSpace = challenge.split(" ")
console.log(challengeSplitSpace)
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
let companyNames = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
 let companyNamesSplit =companyNames.split(" ")
console.log(companyNamesSplit)

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
let challengeReplace= challenge.replace("JavaScript", "Python")
console.log(challengeReplace)
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
let challengeCharAt = challenge.charAt(15)
console.log(challengeCharAt);
// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
let challengeCharCodeAt = challenge.charCodeAt("J")
console.log(challengeCharCodeAt);
// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
