"use strict";
//Defind a function to print each megician name from an array
function show_magicians(megicians) {
    megicians.forEach(name => console.log(name));
}
//function to make magicians great through map() it will modify array
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
//Define an array of magicians names
let magicians_name = ["Harry poter", "Hafsa", "Fatima"];
//Call make_great function to modify magicians names
let great_magicians = make_great(magicians_name);
//Call show_magicians that show modified list of magicians
show_magicians(great_magicians);
