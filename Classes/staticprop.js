class user {
    constructor(username) {
        this.username = username
    }

    LogMe(){
        console.log(`USERNAME IS ${this.username}`);
    }

    static CreateId(){
        return Math.floor(Math.random() * 100000 + 10000)
    }

    //static block access of a given function or object
    // if u use inheritence still it dont give access
}

const obj = new user("hitesh");


