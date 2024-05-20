"use strict";
//Define a function to create a car in object with optional option...
function carInfo(manufacturer, modelName, option) {
    return Object.assign({ manufacturer: manufacturer, modelName: modelName }, option);
}
let car = carInfo("Toyota", " carrolla", { Color: "Black", year: 2023 });
console.log(car);
