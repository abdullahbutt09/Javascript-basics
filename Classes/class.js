class class1 {
    constructor(username , email , password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}abc`
    }
}

const user1 = new class1("abdullah" , "butt@google.com" , "*pass*");

console.log(user1.encryptpassword());

//! we can also use prototype to achieve the same output!
