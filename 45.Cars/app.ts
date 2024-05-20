//Define a function to create a car in object with optional option...

type car = {
    manufacturer: string,
    modelName: string,
    [key: string]: any;
}

    function carInfo(manufacturer: string, modelName: string, option: Partial<car>): car {
return {
        manufacturer: manufacturer,
        modelName: modelName,
        ...option
    };

    }

    let car = carInfo("Toyota"," carrolla", {Color: "Black", year: 2023});
    console.log(car);