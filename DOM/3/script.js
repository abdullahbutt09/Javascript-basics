// !Creating element in DOM

const CreateDiv = document.createElement(`div`);

CreateDiv.className = "My-div";
CreateDiv.id = Math.round(Math.random() * 10 + 1)
CreateDiv.setAttribute("title" , "Code Karo Bhai");
CreateDiv.style.color = "orange";
CreateDiv.style.padding = "5rem"
// CreateDiv.innerText = "This is a Div element";

const addText = document.createTextNode("Chai aur code")
CreateDiv.appendChild(addText)
CreateDiv.style.fontSize = "5rem"
CreateDiv.style.fontFamily = "Cascadia Code";

document.body.appendChild(CreateDiv)
console.log(CreateDiv)