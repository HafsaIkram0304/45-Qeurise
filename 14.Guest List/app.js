"use strict";
//assignment = 14 
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ['Fatima', 'Misbah', 'Taqi', 'Hadi'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log(` Respected Sir/Madam ` + guest_list[i] + `\nWe invited you on dinner tomorrow.\n\nThank you`);
}
