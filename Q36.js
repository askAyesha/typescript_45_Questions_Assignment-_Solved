"use strict";
/*Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, label) {
    // return  `my shirt size is "${size}" and label is "${label}"`;
    return size + label;
}
let func = make_shirt(37, ` Have a good day`);
console.log(func);
