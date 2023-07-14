function make_album(artist, title, tracks) {
    var album = {
        artist_name: artist,
        album_title: title,
        album_tracks: tracks,
    };
    return album;
}
;
console.log(make_album("Sipser", "ToC"));
console.log(make_album("Knuth", "My Work"));
console.log(make_album("Buckland", "1917"));
console.log(make_album("Shai", "Discrete Words", 13));
