//31. No user add an if test to exersice 30
//To make sure the list of user is not empty
//If list is empty, print the message 
//We need to fine some users! 

let users: string [] = ['Fatima','Misbah','Taqi','Hadi','Admin']
if(users.length === 0){
    console.log("We neend to fine some users!");
}
else{
    users = [];
    console.log("All user have been remove " + users.length);
}