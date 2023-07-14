let times_sandwich_items_called = 0
function sandwich_items(items: string[]): void {
    times_sandwich_items_called++
    console.log("\nSandwich " + times_sandwich_items_called +  " contains following items:");
    items.forEach(item => {
        console.log(item);
    });
}

let item_list1: string[] = ["Onion", "Cucumber", "Chicken"];
let item_list2: string[] = ["Onion", "Cucumber", "Chicken Spread", "Ketchup", "Kebab"];
let item_list3: string[] = ["Onion", "Cucumber", "Chicken", "Mayonaise", "Cabbage Leaves"];

sandwich_items(item_list3);
sandwich_items(item_list2);
sandwich_items(item_list1);