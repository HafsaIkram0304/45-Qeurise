//Current User
let current_user = ["Fatima", "Misbah", "Taqi", "Hadi", ";Ebad"];

//Nwe User
let new_user = ["Owais","Urooj", "Fatima", "Samad","Hadi"];

//Loop through new user to check for username avaibility
new_user.forEach(new_one_user =>{
    //Making a condition for username already exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    //Print different messages using if-else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This username ${new_one_user} is available`);
    }
})

