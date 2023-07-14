let friend_names: string[] = ["Larry", "Moe", "Curly"];
let total_friends: number = friend_names.length;

friend_names.forEach(name => {
    console.log("Hi " + name + " you are invited for dinner tomorrow.");
});
console.log("\nTotal friends invited to dinner: " + total_friends);