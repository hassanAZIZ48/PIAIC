let car1 = 'subaru';
let car2 = "DMC-12";
let year1 = 2000;
let year2 = 1990;
let fruits: string[] = ["Apple", "Mango", "Orange"];


console.log("Is car1 == 'subaru'? I say True.");
console.log(car1 == 'subaru');

console.log("Is car1 != 'nissan'? I say True.");
console.log(car1 != 'nissan');

console.log("Is car2 == 'dmc-12'? I say False.");
console.log(car2 == car2.toLowerCase());

console.log("Is year1 > year2? I say True.");
console.log(year1 > year2);

console.log("Is year2 < year1? I say True.");
console.log(year2 < year1);

console.log("Is year1 >= 2002? I say True.");
console.log(year1 >= 2002);

console.log("Is year2 <= 1985? I say False.");
console.log(year2 <= 1985);

console.log("Is year1 == 2000? I say True.");
console.log(year1 == 2000);

console.log("Is year2 != 2000? I say True.");
console.log(year2 != 2000);

console.log("Is car1 == subaru and car2 == DMC-12? I say True.");
console.log((car1 == "subaru") && (car2 == "DMC-12"));

console.log("Is car1 == subaru or year2 == 2005? I say True.");
console.log((car1 == "subaru") || (year2 == 2005));

console.log("Is 'Mango' in fruits array? I say True.");
console.log(fruits.includes("Mango"));

console.log("Is 'Pear' in fruits array? I say False.");
console.log(fruits.includes("Pear"));



