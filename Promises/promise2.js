//chaining with parameters

new Promise((resolve , reject) => {
    
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({uName: "Abdullah" , roll_num: "82"});
        }
        else{
            reject("ERROR-404 something went wrong!")
        }
    },1000)
    
}).then((catch_parameter)=>{
    let obj = catch_parameter;
    return obj;

}).then((obj)=> console.log(obj))

.catch((catch_error) => {
    console.log(catch_error);
}).finally(()=>{
    console.log("Finally the promise is completed or neither rejected!");
})