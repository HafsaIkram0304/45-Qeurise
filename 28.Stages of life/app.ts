//Write an if-else chain that determins a person, stage of life.
//set a value for the variable age, and then:
//If the person is less then 2 years old, print a message that, the person is baby:
let age: number = 25;
if (age<25){
    console.log("the person is baby.");
}


//If the person is at least 2 years old but less then 4, print a message that the prson is toddler.
if(age>=2 && age<4){
    console.log("person is todder.");
} 

//If the person is at least 4 years old but less then 13,
//Print a message that the person is kid.
else if(age>=4 && age<13){
    console.log("person is kid");
}

//If the person is at least 13 years old but less then 20,
//Print a message that the person is teenager.
else if(age>=13 && age<20){
    console.log("person is teenager");
}

//If the person is at least 20 years old but less then 65,
//Print a message that the person is adult.
else if(age>=20 && age<65){
    console.log("person is adult");
}

//If the person age is 65 or older, print a message that the person is an elder.
else{
    console.log("person is an elder")
}
