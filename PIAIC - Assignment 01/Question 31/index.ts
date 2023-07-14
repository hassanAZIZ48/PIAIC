let users: string[] = ["Deacon", "Dominic", "Isaac", "Lute", "Admin", "Chester", "Richard"];

function check_if_empty(array: string[]): void {
    if (users.length == 0) console.log("We need to find some users!");
    else console.log("We have " + users.length + " users.");
}

check_if_empty(users);

// users = [];
// users.length = 0;
users.splice(0, users.length);

check_if_empty(users);