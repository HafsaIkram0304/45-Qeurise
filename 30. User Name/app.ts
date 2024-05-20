let users: string [] = ['Fatima','Misbah','Taqi','Hadi','Admin']
for(let user of users){
    if(user === "Admin"){
        console.log("Hello Admin, would you like see a ststus report?")
    }
    else{
        console.log(`Hello ${users}, Thank you for loging in again`);
    }
}
