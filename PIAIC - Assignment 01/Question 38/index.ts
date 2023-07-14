function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(city + " is in " + country + ".");
}

describe_city("Toba-Tek Singh");
describe_city("Chaghi");
describe_city("Sydney", "Australia");