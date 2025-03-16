const xhr = new XMLHttpRequest();

const url = 'https://api.github.com/users/abdullahbutt09';
const table = document.querySelector(".table");
const button = document.querySelector(".btn");


// console.log(xhr.readyState);

// xhr.open('GET' , url);
// console.log(xhr.readyState);
// xhr.send();
// console.log(xhr.readyState);


button.addEventListener('click', (event)=>{ 
    xhr.open('GET' , url);
    xhr.send();

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            const response = JSON.parse(xhr.responseText);
            table.innerHTML = `
            <h3>Name: ${response.login}</h3>
            <h3>Total Repos: ${response.public_repos}</h3>
            <h3>Blog: ${response.blog}</h3>
            <h3>bio: ${response.bio}</h3>
            <img src="${response.avatar_url}" alt="User Avatar" style="width: 100px; height: 100px; border-radius: 50%;">` 
        }
    }
})

