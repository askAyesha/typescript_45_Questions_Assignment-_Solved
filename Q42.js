"use strict";
/*Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified*/
Object.defineProperty(exports, "__esModule", { value: true });
let magiciaNames2 = [`John`, `Tom`, `peter`];
function show_magicians1(make_great) {
    for (let item of magiciaNames2) {
        console.log(make_great, item);
    }
}
show_magicians1(`the great`);
