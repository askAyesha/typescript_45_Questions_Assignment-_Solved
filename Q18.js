"use strict";
//Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it. 
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.dddd
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed
Object.defineProperty(exports, "__esModule", { value: true });
//storing the  top 5 favourite locations to be there  . 
let favplaces1 = [`Makkah`, `madina`, `palestine`, `turkey`, `indonesia`];
// simply printing it in its original order.
console.log(favplaces1);
//making a copy of the original arry //
let copyofarry = favplaces1.slice();
let sortedarry = copyofarry.reverse();
// let's print it now //
console.log(sortedarry);
// let's see if the original arry is still the same or developed some changes ?//
console.log(favplaces1); // just checked it's in its original order. 
//printing the arry in  reversed alphabetical order 
let copyofarry2 = favplaces1.slice();
let reverseArry = copyofarry2.sort();
console.log(reverseArry);
// let's print the original arry. (it did not change.)
console.log(favplaces1);
/* • Reverse the order of your list. Print the array to show that its order has changed.*/
let reverseOarry = favplaces1.reverse();
/* printing it to check out the result.*/
console.log(reverseOarry);
// the original arry has changed its order list too.
console.log(favplaces1);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.//
let againreverse = reverseOarry.reverse();
console.log(againreverse); //it is back 
console.log(favplaces1); // to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.// 
let sortedarry2 = againreverse.sort();
console.log(sortedarry2);
// here printing the original arry that has been changed into alphabetical order.//
console.log(favplaces1);
// • Sort to change your array so it’s stored in reverse alphabetical order. //
let origanlarrysort = favplaces1.sort();
console.log(origanlarrysort);
let sort2reverseArry = origanlarrysort.reverse();
console.log(sort2reverseArry);
//Print the list to show that its order has changed//
console.log(favplaces1);
