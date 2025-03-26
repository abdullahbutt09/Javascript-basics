const obj = {
    NAME: "ABDULLAH",
    CLASS: "12TH",
    AGE: "20",

    OrderProject: function(){
        console.log("Project available");
    }
}

// obj.NAME = "hassan"
// console.log(obj.NAME);

console.log(Object.getOwnPropertyDescriptor(obj , "NAME"));
//! It takes 2 arguments

// console.log(obj.OrderProject());
// obj.OrderProject();

// Object.defineProperty(obj , "NAME" , {
//     writable: false,
//     enumerable: false,
// })

//? writable means edit the object attributes.
//? enumerable means jab apnay object ko iterate karna ha!
//? configurable means jab apnay object mein koi attribute delete wagera karna ho too.

// console.log(Object.getOwnPropertyDescriptor(obj , "NAME"));

// obj.NAME = "NEW-NAME";//! cannot write because write is false!
// console.log(obj.NAME);

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}