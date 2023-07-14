var friend_names = ["Larry", "Moe", "Curly"];
var total_friends = friend_names.length;
friend_names.forEach(function (name) {
    console.log("Hi " + name + " you are invited for dinner tomorrow.");
});
console.log("\nTotal friends invited to dinner: " + total_friends);
