//Defind the function to show magicians name
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Defind a function to print each magician name from an array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Define an array cotaining magicians name
let magicians_name = ["Harry poter", "Hafsa", "Fatima"]

//Making a orignal array through slice() function
let copy_magicians_name = magicians_name.slice()

//Modify the copied array to includ "The Great" with there names
let copy_great_magicians = make_great(copy_magicians_name);

//show both array Orignal and copied
console.log("\nOrignal Array");
show_magicians(magicians_name);

//Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
