function city_country(city: string, country: string): string {
    return ("\"" + city + ", " + country + "\"");
}

console.log(city_country("Raleigh", "America"));
console.log(city_country("Rome", "Italy"));
console.log(city_country("Rawalpindi", "Pakistan"));