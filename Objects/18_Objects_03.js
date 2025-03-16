//object de-strucutring

const person = {
    Name: 'John',
    age: 30,
    city: "fsd"
}

const {Name, age, city} = person;
// console.log(Name, age, city);

const details = {
    job: "Developer",
    company: "ABC",
    salary: 1000
}

const {job: position} = details;
// console.log(position);

const MyNewObj = {
    MyName: "Abdullah",
    MyAge: 30,
    MyCity: "fsd",
    MyJob: "Developer",
    MyCompany: "ABC",
}

console.log(MyNewObj.MyName,MyNewObj.MyAge, MyNewObj.MyCity, MyNewObj.MyJob, MyNewObj.MyCompany);

// console.log(MyName, MyAge, MyCity, MyJob, MyCompany);
// const {MyName, MyAge, MyCity, MyJob, MyCompany} = MyNewObj;

const {MyName : MeraNaam, MyAge: MereAge, MyCity: MereCity, MyJob: MereJob, MyCompany: MereCompany} = MyNewObj;
console.log(MeraNaam, MereAge, MereCity, MereJob, MereCompany);