const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");
const heading = document.querySelector("#number");
let Interval;

startbutton.addEventListener('click' ,()=>{
    console.log("start button is pressed!");
    if (Interval) {
        clearInterval(Interval);
    }
    Interval = setInterval(()=>{
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        heading.innerHTML = `${randomNumber}`
    },1000)
})

stopbutton.addEventListener('click' , ()=>{
    clearInterval(Interval);
    heading.innerHTML = ''
    Interval = null;
})
