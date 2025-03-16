// ? This kay baray mein charcha

const obj = {
    UserName: "Abdullah",
    Area: "FSD",

    GetUserDetails: ()=>{
        console.log(`Name is: ${this.UserName}`);
        console.log(`Area is: ${this.Area}`);
    },

    GetDetails: function(){
        console.log(`Name is: ${this.UserName}`);
        console.log(`Area is: ${this.Area}`);
        console.log(`Area is: ${this}`);
    }
}

// obj.GetUserDetails(); //! Arrow function dont give access to this keyword due to lexical scoping!
// obj.GetDetails();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    // return this
}

const User1 = new User("Abdullah" , 4 , true);
const User2 = new User("Rafay-Dev" , 6 , false);
console.log(User1.constructor);
