// ---
// ---
// var albums = [
//     {% for review in site.reviews %}
//         ("album-{{ review.unique_name }}",
//         "{{ review.album_image_path }}"),
//     {% endfor %}
// ];

fetch('/reviews.json')
    .then(response => response.json())
    .then( data => {
        console.log(data)
    })
// var playlists = [
//     {% for playlist in site.data.playlist_links %}
//         "playlist-{{ playlist.name }}"
//     {% endfor %}
// ]

// console.log(albums[1])

// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }

// var random_albums = shuffle(albums)

var music_table = document.getElementById('music-page-table')

// var table_cell_num = albums.length + playlists.length*2

music_table.innerHTML = music_table.innerHTML + '<table>'

for (let i = 0; i < albums.length/3; i++) {
    music_table.innerHTML = music_table.innerHTML + '<tr>'
    for (let j = 0; j < 3; j++) {
        music_table.innerHTML = music_table.innerHTML + '<td>'
        music_table.innerHTML = music_table.innerHTML + "<img src='" + random_albums[i*3+j] + "'></img>"
        music_table.innerHTML = music_table.innerHTML + '</td>'
    }
    music_table.innerHTML = music_table.innerHTML + '</tr>'
}

music_table.innerHTML = music_table.innerHTML + '</table>'




// for (let i = 0; i < albums.length + playlists.length*2; i++) {
//     if(i%3 == 0){

//     }
// }