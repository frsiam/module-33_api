function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data.id))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
    
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
        li.innerText = `User ID:  ${user.id}`
        ul.appendChild(li)
    }
}

function userPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhotos(data))
}
function showPhotos(photos){
    const div = document.getElementById('photos')
    let count = 0
    for(const photo of photos){
        count = count + 1;
        if(count <= 20){
            const h1 = document.createElement('h1')
            h1.style.textAlign = 'center'
            h1.style.color = 'orange'
            h1.style.backgroundColor = 'gray'
            h1.innerText = count
            const img = document.createElement('img')
            img.height = '250'
            img.width = '450'
            img.src = `${photo.url}`
            div.appendChild(h1)
            div.appendChild(img)
        }
        
    }
}