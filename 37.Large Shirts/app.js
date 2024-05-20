"use strict";
//Make a function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//Calling a function with by-default values
make_shirt();
//Calling a function now with medium size and default message
make_shirt("medium");
//Calling a function now with small size and also print message
make_shirt("small", "I Love Javascript");
