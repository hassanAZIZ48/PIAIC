function car_info(manufacturer: string, model_name: string, color?: string, year?: number, hatchback?: boolean) {
    let car_object = {
        car_manufacturer: manufacturer,
        car_model_name: model_name,
        car_color: color,
        car_year: year,
        is_hatchback: hatchback
    } 
    
    return car_object;
}

console.log(car_info("Skoda", "T47", "blue", 2020, false));