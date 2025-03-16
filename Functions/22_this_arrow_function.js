// const User = {
//     Name: "Abdullah",
//     age: 22,
//     job: "Developer",

//     WelcomeScreen: function(){
        // console.log(`${this.Name}! welcome to my website`);
        // console.log(this);
//     }
// }

// User.WelcomeScreen();
// User.Name = "haider";
// User.WelcomeScreen();


// console.log(this); //empty object

// const obj = {
//     ArrowFunction: (num1, num2) => (num1 + num2),

//     SimpleFunction: function(){
//         return num1 + num2
//     }, 

//     ShorthandMethod(num1, num2) {
//         return num1 + num2;
//     },
// };

// console.log(obj.ArrowFunction(2, 5)); // Output: 7

// const ReturnObj = () => {
//     return ({user: `Abdullah`,
//         age: 18,
//         job: "Google"
//     })
// }
// console.log(ReturnObj())

// const ShortMethod = (username) => (username + username)

// console.log(ShortMethod("Abdullah"));

// function CheckingThis(user){
    // console.log(this.user); undefined
// }

// CheckingThis();

// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
// !Alert Interesting Question

// ? If u use arrow function in an object and use this keyword to access any object entity this its undefined!

// const obj = {
//     MeraNaam: "JavaScript",
//     showName: () => {
//         console.log(this.MeraNaam); // ❌ Undefined
//     }
// };

// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

// obj.showName(); // Output: undefined
