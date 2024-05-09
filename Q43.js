"use strict";
/*Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name*/
Object.defineProperty(exports, "__esModule", { value: true });
let magiciaNamesT2 = [`John`, `Tom`, `peter`];
let copyofArry = [...magiciaNamesT2];
function show_magicians(make_great) {
    let withgreetings = "";
    for (let item of copyofArry) {
        withgreetings += `${make_great} ${item}\n`;
    }
    return withgreetings;
}
;
let mygreetings = show_magicians('Hello');
let makeArry = mygreetings.split('\n');
console.log(makeArry);
// original arry 
console.log(magiciaNamesT2);
