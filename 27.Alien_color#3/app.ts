let alien_color: string = "green";

//If the alien is green, print a message that the players earned 5 points.
if(alien_color == "green"){
    console.log(" the player just earned 5 point.");
} 

//If the alien is yellow, print a message that the players earned 10 points.
else if(alien_color == "yellow"){
    console.log("the plaer just earned 10 point");
}

//If that alien is red, print a message that the players earned 15 ponts.
else if(alien_color == "red"){
    console.log("the player just eaned 15 points");
}
else{
    console.log("please select right color");
}

//Write 3 varsion of this program, making sure.
//Each message is printed for the appropriate color alien.

//Varsion 2.
alien_color ="red";
if(alien_color == "green"){
    console.log("the plaeyr earned 5 point.")
}
else if(alien_color ==  "yellow"){
    console.log("the player earned just 10 points.")
}
else if(alien_color == "red"){
    console.log("please select right color.")
}

//varsion 3.
alien_color ="yellow";
if(alien_color == "green"){
    console.log("the player erarned 5 point.");
}
else if(alien_color == "red"){
    console.log("the player just earned 10 points.");
}
else{
    console.log("please select right color");
}
