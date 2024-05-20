"use strict";
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4];
//**String test**
//Test 1: equality(True)
console.log("is car=='subaru' ? I predict true.");
console.log(car == 'subaru');
//Test 2:strict equality (False)
console.log("is car === 'subaru' ? I predict False.");
console.log(car === 'subaru');
//Test 3:Iniquality(True)
console.log("is car!='Toyota'? I predict true.");
console.log(car != 'Toyota');
//Test 4: Inquality (False)
console.log("is car!==;subaru'? I predict false.");
console.log(car !== 'subaru');
//**Lowercase condition test**
//Test 5: Lowercase conversion (True)
console.log("is car tolowercase()=='subaru' ? I predict true.");
console.log(car.toLowerCase() == 'subaru');
//Test 6: Lowercase conversion (True)
console.log("is car tolowercase()==='subaru' ? I predict true");
console.log(car.toLocaleLowerCase() === 'subaru');
//**Numarical Test**
//Test 7: Equality (True)
console.log("is age==25 ? I predict true");
console.log(age == 25);
//Test 8: Inaquality (False)
console.log("is age!=30 ? I predict false");
console.log(age != 30);
//Test 9: Greter then (False)
console.log("is age > 30 ? I predict false");
console.log(age > 30);
//Test 10: Less then OR equal (True);
console.log("is age <= 25 ? I predict");
console.log(age <= 25);
//**Logical Oprators**
//Test 11: AND Oprator (True);
console.log("is age >20 && age < 30 ? I predict true");
console.log(age > 20 && age < 30);
//Test 12: OR (False)
console.log("is age > 30 || age < 18 ? I predict false");
console.log(age > 30 || age < 18);
//**Array Tests**
//Test 13: In Array (True)
console.log(" is 3 in number ? I predict true");
console.log(3 in numbers);
//Test 14: Not in Array (False)
console.log("is 5 not in number ? I predict false");
console.log(5 in numbers);
