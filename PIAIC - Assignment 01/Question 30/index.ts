let users: string[] = ["Deacon", "Dominic", "Isaac", "Lute", "Admin", "Chester", "Richard"];

users.forEach(user => {
    if (user == "Admin") console.log("Hi " + user + ".\nWould you like to see status report?");
    else console.log("Hi " + user + ", we are glad to have you with us.");
});