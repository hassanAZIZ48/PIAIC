let friend_names: string[] = ["Larry", "Moe", "Curly"];

friend_names.forEach(name => {
    console.log("Hi " + name + " you are invited for dinner tomorrow.");
});

console.log("\nOh, it looks like Larry cannot make it to the dinner Stooges!\n");

friend_names[0] = "Dean";

friend_names.forEach(name => {
    console.log("Hi again, " + name + " you are invited to dinner tomorrow!");
});

console.log("\nFriends looks like we have more space available so more people can join.\n");

friend_names.unshift("Kirk");
friend_names.push("Spock");
const friends_array_middle_position: number = (friend_names.length - 1) / 2;
friend_names.splice(friends_array_middle_position, 0 , "Uhura");

friend_names.forEach(name => {
    console.log("Hi " + name + " you are invited to dinner!");
});

console.log("\nFriends it appears as if we cannot accomodate you all.\n");

const limited_friends: number = 2;    

for (let index = (friend_names.length - 1) ; index >= limited_friends; index--) {
    const name: string = friend_names[index];
    console.log("Apologies " + name + ", we cannote invite you for now.");
    friend_names.pop();
}

friend_names.forEach(name => {
    console.log("\nHi " + name + " you are still invited to dinner tomorrow.");
});