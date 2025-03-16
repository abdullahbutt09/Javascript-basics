const FirstPromise = new Promise((resolve , reject) => {
    setTimeout(()=>{
        console.log("Task is completed in 1 second!");
        resolve();
    },1000)
});

FirstPromise.then(() => {
    console.log("Promise 1 consumed!");
})

new Promise((resolve , reject) => {
    setTimeout(()=>{
        console.log("Task 2 is completed in 1 second!");
        resolve();
    },1000)
}).then(() => {
    console.log("Promise 2 consumed!");
})
