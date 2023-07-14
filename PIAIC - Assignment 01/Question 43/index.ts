let magicians: string[] = ["Houdini", "Penn and Teller", "Dai Vernon", "Cyril Takayama"];

function make_awesome(magician_name: string): string {
    return "Awesome " + magician_name;
}

function show_magicians(magicians_array: string[]): void {
    magicians_array.forEach(magician => {
        console.log(magician);
    });
};


let magicians_copy: string[] = [];
magicians.forEach(magician => {
    magicians_copy.push(make_awesome(magician));
});

show_magicians(magicians);
show_magicians(magicians_copy);