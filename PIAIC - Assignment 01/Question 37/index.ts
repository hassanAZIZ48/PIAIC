function make_shirt(size: string = "Large", printed_message: string = "I love Typescript!"): void {
    console.log("The shirt having size \"" + size + "\", has this printed message:\n\"" + printed_message + "\"");
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "Typescript is a static langugage.")