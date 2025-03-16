const mysymbol = Symbol('#');

const MyObj = {
    name: 'John',
    age: 25,
    isMarried: false,
    [mysymbol]: "@",
    sayHello: function () {
        console.log('Hello');
    },
    DoingJob: "Web Developer",
    Myarr: ["PUBG", "CODE", "WATCHING-YT", "ELSE"],
    "Full Name" : "Abdullah Butt"
};

// console.log(MyObj);
// console.log(MyObj.name);
// console.log(MyObj['name']);
// console.log(MyObj['Full Name']);

let NewElement = "MyHobbies";
MyObj.NewElement = "CONSISTENT IS THE KEY";
// console.log(MyObj);

// console.log(Object.keys(MyObj));
// console.log(Object.values(MyObj));

// Object.freeze(MyObj); // This will make the object immutable
MyObj.name = "Ali";

// console.log(MyObj);

MyObj.greet = function () {
    console.log(`Hello ${this.name}`);
}

MyObj.greet2 = function () {
    console.log('Hello butt');
}

console.log(MyObj.greet());  
console.log(MyObj.greet2());  

console.log(MyObj.greet);