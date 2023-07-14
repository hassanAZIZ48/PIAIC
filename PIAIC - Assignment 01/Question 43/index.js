var magicians = ["Houdini", "Penn and Teller", "Dai Vernon", "Cyril Takayama"];
function make_awesome(magician_name) {
    return "Awesome " + magician_name;
}
function show_magicians(magicians_array) {
    magicians_array.forEach(function (magician) {
        console.log(magician);
    });
}
;
var magicians_copy = [];
magicians.forEach(function (magician) {
    magicians_copy.push(make_awesome(magician));
});
show_magicians(magicians);
show_magicians(magicians_copy);
