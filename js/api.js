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
        li.innerText = `User ID: ${user.id}, 
        User Name: ${user.name},
        User Email: ${user.email}
        `
        ul.appendChild(li);
    }
}