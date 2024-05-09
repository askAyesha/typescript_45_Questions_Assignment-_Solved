"use strict";
/*You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array*/
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
let parents = `mother and father`;
console.log(parents == `mother and father`); //true
console.log(parents !== `brother`); // false
//• Tests using the lower case function
let myNameLowerCase = `Ayesha`;
console.log(myNameLowerCase == `ayesha`); //false
console.log(myNameLowerCase == `Ayesha`); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
let num1 = 5;
console.log(num1 == 5); //true 
console.log(num1 !== 4); //true  (comment for me [ exclamation mark is used in ts as not])
console.log(num1 < 2); //false // 2 is greater than 5// fasle 
console.log(num1 > 2); // true //2 is less than 5// true
console.log(num1 <= 2); // false // 2 is equal to 5 or greater than 5.// false//
console.log(num1 >= 2); // true // 2 is less than or equal to 5 // less than 5 //true [ if either of the statement is true or false then it will be considered accordingly true/false you got it girl (ek bhi statement theek apka ans usi pr relay krega)]
//• Tests using "and" and "or" operators
//&& and
let num2 = 10;
let num3 = 5;
console.log(num2 > 8 && num3 < 5); // false [ both should be righ [right and left in && /and] or else you would get ans as false]
// 8 is lee than 10 yes it is true // num3 is less than (5) //false. // overall ans false in &&.
// | /or
console.log(num2 > 8 && num3 < 5); // true
// 8 is less than num2 yes it is true , and num3 is less than 5 false ,overal ans is true (| OR). means if either of them is true the ans is true . 
// • Test whether an item is in an array
let Arry1 = [`string`, `arry`, `float`, `number`];
console.log(Array.isArray(Arry1)); // true//
let string1 = `it is a string type`;
console.log(Array.isArray(string1)); //false // it is not arry type ,it is a string.
