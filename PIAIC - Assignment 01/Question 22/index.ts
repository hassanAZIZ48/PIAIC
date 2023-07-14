let fruits:string[] = ["Appple", "Mango", "Raspberry", "Tomato"];

console.log("List loop with error:")
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
    
}

console.log("\n\nList loop without error:")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
}