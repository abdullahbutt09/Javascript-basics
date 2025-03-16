let date =  new Date();

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getSeconds());
// console.log(date.getDate());
// console.log(date.toDateString());
// console.log(date.toJSON())
// console.log(date.toISOString())
console.log(date.getMonth() + 1); 
// 0 say start ho raha ha


let timestamp = Date.now();
// console.log(timestamp);

// console.log(date.getTime());
// console.log(typeof date); // Interview Question
// console.log(Math.floor(Date.now() / 1000)); Interview question

let DateObj = new Date();
let makeobjofdate = DateObj.toLocaleString(`default` ,{
    day: "2-digit",
    month: "long",
    minute: "numeric"
})

console.log(makeobjofdate);
