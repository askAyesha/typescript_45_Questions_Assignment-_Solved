"use strict";
/*Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message.
*/
// function make_shirt1(  size: string , label : string ) { 
//     // return  `my shirt size is "${size}" and label is "${label}"`;
// return size + label ;
Object.defineProperty(exports, "__esModule", { value: true });
// } let funct = make_shirt1( " Large" ,  " i love typescript");
// console.log( funct);
//large as default
// function make_shirt1(  label: string , size : string =`Large` ){ 
//     // return  `my shirt size is "${size}" and label is "${label}"`;
// return size + label ;
// } let funct = make_shirt1( " i love typescript");
// console.log( funct);
//medium as default
// function make_shirt1(  label: string , size : string =`medium` ){ 
//     // return  `my shirt size is "${size}" and label is "${label}"`;
// return size + label ;
// } let funct = make_shirt1( " i love typescript");
// console.log( funct);
// shirt of any size
function make_shirt1(size, label) {
    // return  `my shirt size is "${size}" and label is "${label}"`;
    return size + label;
}
let funct = make_shirt1(" any size", "  just good vibes");
console.log(funct);
