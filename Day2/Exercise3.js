// Exercises: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let sentenceRegex =sentence.match(/love/gi)
console.log(sentenceRegex);
// 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let sentences = "You cannot end a sentence with because because because is a conjunction"
let sentencesRegex =sentences.match(/because/gi)
console.log(sentencesRegex);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     ```js
//         const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//     ```

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence3Clean = sentence3.trim()
console.log(sentence3Clean);
let regex =/\d+/g
console.log(sentence3Clean.replace(regex));
// let newSentence3 = sentence3Clean.replace(/)

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
