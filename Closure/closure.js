const ButtonsSet = document.querySelectorAll('.ButtonsGroup button');

// ButtonsSet.forEach((button) => {
//     button.addEventListener('click',()=>{
//         document.body.style.backgroundColor = button.textContent
//     })
// }) // ?This is a normal method for this buttons approach

//* Closure practical example
const changeBackground = (color) => {
    // return function() {
    //     document.body.style.backgroundColor = color;
    // } //! you can also return normal function

    return () => {
        document.body.style.backgroundColor = color;
    }
};

ButtonsSet.forEach((button) =>{
    button.onclick = changeBackground(button.textContent);

    // button.addEventListener('click', changeBackground(button.textContent));
})