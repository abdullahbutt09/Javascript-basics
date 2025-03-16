let Mystring = "abdullah";  

let NewString = new String("abdullah");

// console.log(Mystring.charAt(2)); //d
// console.log(Mystring.charCodeAt(0)); // return UTF Code

const emoji = "😁";
// console.log(emoji.codePointAt(0));
let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "FOX";

// console.log(`The word "${word.toLowerCase()}" ${sentence.toLowerCase().includes(word.toLowerCase()) ? "is" : "is not"} in the sentence.`);

// console.log(sentence.indexOf("k"));

let GetName = "   Abdullah  "
// console.log(GetName);
// console.log(GetName.trim());

sentence = sentence.replace(/\s+/g, " ");
// console.log(sentence);

let searchterm = "quick"
// console.log(`index of the ${searchterm} is ${sentence.lastIndexOf(searchterm)}`);

let text = "The fox jumps over the fox.";
let result = text.match(/fox/g); // 'g' means find all matches
// console.log(result);

let text1 = "The FOX jumps over the fox.";
let result1 = text1.match(/fox/gi); // 'i' makes it case-insensitive
// console.log(result1);

let text2 = "I have 2 apples and 10 bananas.";
let result2 = text2.match(/\d+/g); // '\d+' finds numbers
// console.log(result2);

let text3 = "Hello, world! How's it going?";
let result3 = text3.match(/\w+/g); // '\w+' finds words
// console.log(result3);

let text4 = "JavaScript is awesome!";
let result4 = text4.match(/javaScript/i);  // Looking for "python"
// console.log(result4 ? "Found" : "Not found");

let char1 = "é"; // Single character
let char2 = "e\u0301"; // "e" + separate accent (combining mark)

// console.log(`char1 ${char1} , char2 ${char2}`);

// console.log(char1 === char2);
// console.log(char1.normalize() === char2.normalize());

let str = "Hello";
let paddedStr = str.padEnd(10, "h");
// console.log(paddedStr);
// console.log(paddedStr.length);

const mood = "not Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
