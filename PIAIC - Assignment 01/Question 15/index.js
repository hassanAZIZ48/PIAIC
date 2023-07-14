var friend_names = ["Larry", "Moe", "Curly"];
friend_names.forEach(function (name) {
    console.log("Hi " + name + " you are invited for dinner tomorrow.");
});
console.log("Oh, it looks like Larry cannot make it to the dinner Stooges!");
friend_names[0] = "Dean";
friend_names.forEach(function (name) {
    console.log("Hi again, " + name + " you are invited to dinner tomorrow!");
});
