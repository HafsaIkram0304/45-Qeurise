//Making a Array of countries and print its original order.
let countriesToVisit: string[] = ["Chaina", "Denmark", "Brazil","Argentina"];
console.log("Original order", countriesToVisit);

//Print tha array in Alphabatical order without modifying the actual Array list.
console.log("Alphabetical order:", [...countriesToVisit].sort());

//Show that the Array is still in its original order.
console.log("Stil in original order:", countriesToVisit);

//Print the Array in reverse order without modifying the actual Array list.
console.log("Reverse order:", [...countriesToVisit].reverse());

//Show that the Array is still in original order.
console.log("Stile original order:",countriesToVisit);

//WE have change the original Arraay order now.
console.log("Original array is reverse:",countriesToVisit.reverse());

//Print the Array to show that its back to list original order.
console.log("Back to original order:", countriesToVisit.reverse());

//Print the Array to show that its order has been changed in Alphabetical order now.
console.log("sorted in Alphabetical order:", countriesToVisit.sort());

//We have change the again original Array order now in reverse order again.
console.log("Original Array reverse again:", countriesToVisit.reverse());