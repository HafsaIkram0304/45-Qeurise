"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three function with diffrent value
let album1 = make_album("Hafsa", "Album title 1");
let album2 = make_album("Fatima", "Album title 2");
let album3 = make_album("Misbah", "Album title 3", 10);
//Print value of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
