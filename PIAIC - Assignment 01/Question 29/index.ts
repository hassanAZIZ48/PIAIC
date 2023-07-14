let favorite_fruits: string[] = ["Apple", "Peach", "Strawberry"];

function array_contains (array: string[] , element: string): boolean {
    let answer: boolean = false;
    array.forEach(item => {
        if (item == element) answer = true;
    });
    return answer;
}

if (array_contains(favorite_fruits, "Apple")) {
    console.log("You really like apple.");
}

if (array_contains(favorite_fruits, "Peach")) {
    console.log("You really like peach.");
}

if (array_contains(favorite_fruits, "Strawberry")) {
    console.log("You really like strawberry.");
}

if (array_contains(favorite_fruits, "Grapes")) {
    console.log("You really like grapes.");
}

if (array_contains(favorite_fruits, "Melon")) {
    console.log("You really like melon.");
}