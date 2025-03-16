const parent = document.querySelector('.weekdays');
// console.log(parent)
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[1].innerText);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);

// }

const arr = ['orange', 'green', 'blue', 'red' , 'cyan' , 'lime' , 'yellow'];

const getcolor = arr[Math.floor(Math.random() * arr.length)];

// console.log(getcolor);

let previous = null;
for (let i = 0; i < parent.children.length; i++) {
    
    let getcolor = arr[Math.floor(Math.random() * arr.length)];
    parent.children[i].style.color = getcolor;
}

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelectorAll('.day')
// const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
console.log("NODES: ", parent.childNodes);
