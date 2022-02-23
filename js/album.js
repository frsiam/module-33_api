function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}

function displayAlbum(albums){
    const div = document.getElementById('album')
    for(const album of albums){
        const p = document.createElement('p')
        p.style.textAlign = 'center'
        p.style.border = '2px solid green'
        p.style.margin = '20px 100px'
        p.style.padding = '20px 0'
        p.style.backgroundColor = 'orange'
        p.innerText = album.title
        div.appendChild(p)
    }
}
loadAlbum()