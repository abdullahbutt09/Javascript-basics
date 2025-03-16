// function PassUserName(username) {
//     console.log(username ? `${username} just logged in` : `please enter a valid user name`);
//     return username;
// }

// let holdusername = PassUserName();  //undefined
// let holdusername = PassUserName("");  //string
// let holdusername = PassUserName("23");  

// console.log(typeof holdusername);
// console.log(PassUserName("Abdullah"));

// function checkbasename(username){
//     if(!username){
//         console.log("Please enter a valid username");
//         return;
//     }
//     console.log(`Welcome ${username}`);
// }

// checkbasename("Abdullah");
// checkbasename();
// checkbasename("");

function CheckEvenNumber(number){
    console.log(number ? `${number} is ${number % 2 === 0 ? 'even' : 'odd'}` : `please enter a valid number`);
    return number;
}

CheckEvenNumber(3)
