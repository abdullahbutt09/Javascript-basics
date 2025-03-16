const MyHobbies = ["PUBG" , "CODE" , "WATCHING-YT" , "ELSE"];
const fruits = ["Apple" , "Banana" , "Mango" , "Orange"];

// MyHobbies.push(fruits);

// console.log(MyHobbies);
// console.log(MyHobbies.length);

const newarr = MyHobbies.concat(fruits);
// console.log(newarr);

// alternative method

const newarr2 = [...MyHobbies , ...fruits];
// console.log(newarr2);

let num_array = [4,
    [2, [3, 4]],
    [5, [6, 7]],
    [8, [9, 10]]
];
const fold_new_array = num_array.flat(Infinity);
// console.log(fold_new_array);


// console.log(Array.isArray("ABDULLAH")); 
// console.log(Array.from("ABDULLAH"));

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

let newarr3 = ["potato" , "tomato" , "onion" , "garlic" , "ginger"];
// let catcharr = newarr3.copyWithin(1 , 3);
// console.log(catcharr);

