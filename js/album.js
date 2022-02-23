function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}

function displayAlbum(albums){
    for(const album of albums){
        
    }
}