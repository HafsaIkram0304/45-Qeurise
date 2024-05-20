"use strict";
let guest_list = ['Fatima', 'Misbah', 'Taqi', 'Hadi'];
guest_list.unshift('Fatima', 'Misbah', 'Taqi');
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_list[i], `\nWe invited you on dinner tomorrow. We found big table so we dicide to invite 3 more guest\nThank you`);
}
