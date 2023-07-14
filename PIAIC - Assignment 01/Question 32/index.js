var old_users = ["Deacon", "Dominic", "Isaac", "Lute", "Admin", "Chester", "Richard"];
var new_users = ["Harris", "Sarah", "Max", "IsaaC", "Hans", "May", "Deacon"];
function find_item_in_array(array, item) {
    var contains_item = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() == item.toLowerCase())
            contains_item = true;
    }
    return contains_item;
}
new_users.forEach(function (user) {
    if (find_item_in_array(old_users, user))
        console.log(user + ", you need to select a new username.");
    else
        console.log(user + ", your username is available");
});
