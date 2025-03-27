function outer() {
    let browser = "google";
    function inner() {
        console.log(browser);
        const browser2 = "firefox";
    }
    inner();
    // console.log(browser2); //!cannot access because outside of scope
}

// outer();

function func1() {
    let username = "abdullah"
    // console.log("OUTER", secret); //!cannot access scope limit
    function func2() {
        let secret = "my123"
        console.log("inner", username);
    }
    function func3() {
        console.log("innerTwo", username);
        // console.log(secret); //!cannot access scope limit
    }
    func2()
    func3()
}
// func1()

function OuterFunc() {
    const name = "Mozilla";
    function InnerFunc(){
    console.log(name);
    }
    return InnerFunc;
}

const myFunc = OuterFunc();
console.log(myFunc); //? it will return the reference

// myFunc()