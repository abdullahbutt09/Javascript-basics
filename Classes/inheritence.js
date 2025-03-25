class user {
    constructor(username) {
        this.username = username
    }

    LogMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends user{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const class2 = new teacher("mustafa" , "mustafa@google.com" , "123");

class2.addCourse();
// class1.addCourse(); not possible

const class1 = new user("abdullah");

class2.LogMe();// mustafa 
class1.LogMe(); // abdullah

// class2 has the access of class1 functions

console.log(class1 === class2); // false
console.log(class2 instanceof user);