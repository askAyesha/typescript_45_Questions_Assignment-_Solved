"use strict";
/*Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
let magiciaNames = [`John`, `Tom`, `peter`];
function show_magicianss() {
    for (let item of magiciaNames) {
        console.log(item);
    }
}
show_magicianss();
