let alien1_color: string = "green";
let player_points: number = 0;

if (alien1_color == "green") {
    player_points += 5;
    console.log("You just earned 5 points.");
};
console.log("\nPlayer points: " + player_points);

alien1_color = "red";
if (alien1_color == "green") {
    player_points += 5;
    console.log("You just earned 5 points.");
};
console.log("\nPlayer points: " + player_points);