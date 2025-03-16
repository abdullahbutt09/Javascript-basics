const ObjWithNew = new Object();
ObjWithNew.name = "John";
ObjWithNew.age = 25;
ObjWithNew.isMarried = false;

// console.log(ObjWithNew);

const simpleobj = {
    naam: "John",
    age: 25,
    isMarried: false
}

// console.log(simpleobj);
// console.log(Object.keys(simpleobj));
// console.log(Object.values(simpleobj));

// console.log(simpleobj.hasOwnProperty('naam'));

const MyObj = {
    Nameobj: {
        fullname: {
            firstName: "Abdullah",
            lastName: "Butt"
        }
    }
}

// console.log(MyObj);
// console.log(MyObj.Nameobj);
// console.log(MyObj.Nameobj.fullname);
// console.log(MyObj.Nameobj.fullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2 , ...obj4};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
        CheckBase: true
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[3].email); // array of objects

// console.log(Object.keys(users[0]));
// console.log(Object.values(users[0]));

// console.log(Object.keys(users[1]));
// console.log(Object.values(users[1]));

// console.log(Object.keys(users[2]));
// console.log(Object.values(users[2]));

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
