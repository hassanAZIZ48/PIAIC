var magicians = ["Houdini", "Penn and Teller", "Dai Vernon", "Cyril Takayama"];
function make_awesome(magicians_array) {
    for (var i = 0; i < magicians_array.length; i++) {
        magicians_array[i] = "Awesome " + magicians_array[i];
    }
    return magicians_array;
}
function show_magicians(magicians_array) {
    magicians_array.forEach(function (magician) {
        console.log(magician);
    });
}
;
make_awesome(magicians);
show_magicians(magicians);
