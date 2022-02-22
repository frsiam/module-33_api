function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
    
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUser(x){
    const ul = document.getElementById('users');
    for(const user of x){
        const li = document.createElement('li')
        li.innerText = `User Name: ${user.name}
        `
        ul.appendChild(li);
    }
}
function showUserId(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUserId(data))
}
function displayUserId(y){
    const ul = document.getElementById('user-id')
    for(const user of y){
        const li = document.createElement('li')
        li.innerText = `User ID:  <h1>${user.id}</h1>`
        ul.appendChild(li)
    }
}