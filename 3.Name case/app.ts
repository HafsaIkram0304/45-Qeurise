//Name Cases: Store a person’s name in a variable, and then print
// that person’s name in lowercase, uppercase, and titlecase.

let personName: string="Hafsa";
console.log("Lowercase:", personName.toLowerCase());
console.log("Upercase:",personName.toLocaleUpperCase());
let title_case = personName[0]. toUpperCase() + personName. slice(1). toLowerCase();
console.log("Titlecase:", title_case);
