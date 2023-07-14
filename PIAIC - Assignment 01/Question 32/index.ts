let old_users: string[] = ["Deacon", "Dominic", "Isaac", "Lute", "Admin", "Chester", "Richard"];
let new_users: string[] = ["Harris", "Sarah", "Max", "IsaaC", "Hans", "May", "Deacon"];

function find_item_in_array(array: string[], item: string): boolean {
    let contains_item: boolean = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() == item.toLowerCase()) contains_item = true; 
    }
    return contains_item;
}

new_users.forEach(user => {
    if (find_item_in_array(old_users, user)) console.log(user + ", you need to select a new username.");
    else console.log(user + ", your username is available")
});
