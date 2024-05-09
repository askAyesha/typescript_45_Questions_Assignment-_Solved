"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// // and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
//  first i am stroring the person name in a variable 
const myName = `Ayesha Noor`;
// printing it into lowercase
console.log(myName.toLowerCase());
// now em gonna print it into uppercase
console.log(myName.toUpperCase());
// finally in "Titlecase"(it is a bit tricky but gonna kick it too :)
let firstLetter = myName.charAt(0).toUpperCase();
let restLetters = myName.slice(1).toLowerCase();
let title_case = firstLetter + restLetters;
console.log(title_case);
