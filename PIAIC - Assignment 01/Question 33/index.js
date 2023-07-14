var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (character) {
    if (character == 1)
        console.log(character + "st");
    else if (character == 2)
        console.log(character + "nd");
    else if (character == 3)
        console.log(character + "rd");
    else
        console.log(character + "th");
});
