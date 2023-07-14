let magicians: string[] = ["Houdini", "Penn and Teller", "Dai Vernon", "Cyril Takayama"];

function show_magicians(magicians_array: string[]): void {
    magicians_array.forEach(magician => {
        console.log(magician);
    });
};

show_magicians(magicians);