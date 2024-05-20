

let guest_list : string [ ] = ['Fatima','Misbah','Taqi','Hadi'];
let not_present: string = 'Fatima';
let new_guest: string = 'Ali';
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam `  +  guest_list  [ i ] +  `,\n We invited you on dinner tomorrow. \n Thank you`)
}
console.log(`Mr/Miss. ${not_present} will not coming tomorrow dinner,`)
