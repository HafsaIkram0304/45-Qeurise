//Define a function with a rest parameter that eccept aitems arguments representing our sandwich
function makeSandwich(...item: string []){
    console.log("\n Making a sandwich with the following item \n ");

    item.forEach(singleItem => console.log(singleItem));

    console.log("\n Now Enjoy Sandwich \n");
}

//Call the function 3 item with 3 diffrent of number argument
makeSandwich("Chiken", "Chese"," Mayo","Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread","Butter", "Mayo", "Chese", "Egg","Chiken","Tomato" );