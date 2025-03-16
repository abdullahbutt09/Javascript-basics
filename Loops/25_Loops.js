// For Loop While Do While

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");    
// }

//while do while para howa ha

//* FOR OFF LOOP

// let MyName = "Abdullah Butt"

// for (const value of MyName) {
//     if(value == " "){
//         continue;
//     }
//     console.log(value);
// }

// const randomdata = [4 , "abcd" , true , 123456789n , 1 , `gta vice city`];

// for (const value of randomdata) {
//     console.log(value ," -> ", randomdata);
// }

// const obj = {
//     naam: "Abdullah",
//     job: "developer",
//     age: 18
// }
// for (const value of obj) { //!TypeError: obj is not iterable
//     console.log(value);
// }

// ? Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('PK', "Pakistan")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ' :- ', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// }