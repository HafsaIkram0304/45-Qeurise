
let guest_list : string [ ] = [ 'Fatima','Misbah','Taqi','Hadi'];
console.log(`\nUnfortunately we can not arrange big table. only two people allow,`)
while(guest_list.length>2){
    let remove_guest = guest_list. pop();
    console.log( `Sorry Sir \ Madam ${remove_guest} you are not invited for dinner`)
}
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir \ Madam ` + guest_list[i] + `,\nig table so we decid to invite 3 more guest \nThank you`)
}
guest_list.splice(0,2)
console.log(guest_list)