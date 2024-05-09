"use strict";
/*If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program*/
Object.defineProperty(exports, "__esModule", { value: true });
// let TArry: (string | number) [] = [ `Ayesha ` , 2024 ,`Q1` ];
// index numbers 0:Ayesha  1:2024  2:Q1//
//let's print an index number which isnt defined yet .
// console.log(TArry[3]); // (undefined )
// let's fix it . 
let TArry = [`Ayesha `, 2024, `Q1`, ` software developer`];
console.log(TArry[3]); // now it has been defined as (software developer).
