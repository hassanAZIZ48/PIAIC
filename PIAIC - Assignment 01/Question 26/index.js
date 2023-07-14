var alien1_color = "green";
var player_points = 0;
if (alien1_color == "green") {
    player_points += 5;
    console.log("You just earned 5 points.");
}
else {
    player_points += 10;
    console.log("You just earned 10 points.");
}
console.log("\nPlayer points: " + player_points + "\n");
alien1_color = "red";
if (alien1_color == "green") {
    player_points += 5;
    console.log("You just earned 5 points.");
}
else {
    player_points += 10;
    console.log("You just earned 10 points.");
}
console.log("\nPlayer points: " + player_points);
