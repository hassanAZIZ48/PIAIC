var users = ["Deacon", "Dominic", "Isaac", "Lute", "Admin", "Chester", "Richard"];
function check_if_empty(array) {
    if (users.length == 0)
        console.log("We need to find some users!");
    else
        console.log("We have " + users.length + " users.");
}
check_if_empty(users);
users = [];
check_if_empty(users);
