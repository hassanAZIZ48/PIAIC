function make_shirt(size, printed_message) {
    if (size === void 0) { size = "Large"; }
    if (printed_message === void 0) { printed_message = "I love Typescript!"; }
    console.log("The shirt having size \"" + size + "\", has this printed message:\n\"" + printed_message + "\"");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Typescript is a static langugage.");
