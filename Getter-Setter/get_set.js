class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value;
    }
}

const obj = new User("abdullah@.ai", "abc")
console.log(obj.email);
console.log(obj.password);