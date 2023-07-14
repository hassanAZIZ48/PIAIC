let locations: string[] = ["K2", "Sydney", "London", "Nebraska", "Wyoming"];

console.log("Original array:\n" + locations);

let locations_sorted: string[] = locations;
console.log("Alphabetical array:\n" + locations_sorted.sort());

console.log("\nOriginal array:\n" + locations);
console.log("Reverse-Alphabetical array:\n" + locations_sorted.reverse());
console.log("\nOriginal array:\n" + locations);

let inverted_locations_array: string[] = [];
for (let i = (locations.length - 1); i >= 0; i--){
    inverted_locations_array.push(locations[i]);
}
console.log("\nInverted-Original array:\n" + inverted_locations_array);

let double_inverted_locations_array: string[] = [];
for (let i = (locations.length - 1); i >= 0; i--){
    double_inverted_locations_array.push(inverted_locations_array[i]);
}
console.log("\nDouble-Inverted-Original array back in original order:\n" + inverted_locations_array);

console.log("\n\n\nAlphabetical-Original array:\n" + locations.sort());
console.log("\nReverse-Alphabetical-Original array:\n" + locations.reverse());