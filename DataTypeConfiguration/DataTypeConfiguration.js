// console.log(1 + "2" + 3);
// console.log(1 + + "3"); // 4
// console.log("1" + 2 + 3);

// Jo datatype pehle aayega usi ke sath concatenation hoga or wohi datatype ke config ke hisab se output aayega

// console.log(typeof(1 + + "2")); // number
// console.log(typeof(1 + "2")); // string

let value = 100;
// let result = value++;
let result = ++value + ++value;

// console.table([value, result]);
console.table({ value, result });
