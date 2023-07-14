var times_sandwich_items_called = 0;
function sandwich_items(items) {
    times_sandwich_items_called++;
    console.log("\nSandwich " + times_sandwich_items_called + " contains following items:");
    items.forEach(function (item) {
        console.log(item);
    });
}
var item_list1 = ["Onion", "Cucumber", "Chicken"];
var item_list2 = ["Onion", "Cucumber", "Chicken Spread", "Ketchup", "Kebab"];
var item_list3 = ["Onion", "Cucumber", "Chicken", "Mayonaise", "Cabbage Leaves"];
sandwich_items(item_list3);
sandwich_items(item_list2);
sandwich_items(item_list1);
