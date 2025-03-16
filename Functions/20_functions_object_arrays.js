// const MyObj = {
//     username: "ABDULLAH",
//     age: 25,
//     city: "Faisalabad",
//     job: "Web Developer",
//     isMarried: false
// }

// function AcceptObject(obj){
    // if(!obj){
    //     console.log("Please enter a valid object");
    //     return;
    // }
    // console.log(obj);
    // console.log(obj ? `Object is valid ${obj}` : `Please enter a valid object`);
    // console.log((obj ? "Object is valid:" : "Please enter a valid object"), obj);
// }

// function AcceptObject(obj) {
//     console.log(
//         obj && typeof obj === "object" && !Array.isArray(obj)
//             ? "Object is valid:"
//             : "Please enter a valid object",
//         obj
//     );
// }

// AcceptObject("Abdullah");
// AcceptObject(123); // ❌ Please enter a valid object 123
// AcceptObject(MyObj);
// AcceptObject();
// console.log(AcceptObject(MyObj)); undefined

// const arr = [123 , "a" , true , {name: "Abdullah"}];

// function GrapArgumentOfArray(array){
//     console.log(array[3])
//     console.log(array.length);
// }

// GrapArgumentOfArray(arr);