"use strict";
/*Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.*/
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails(manufacturer, modelName, ...adInFo) {
    let car = { manufacturer, modelName, ...Object.fromEntries(adInFo) };
    return car;
}
;
let mycarDetails = carDetails(`Toyota`, `Corolla`, [`Color`, `Blue`], [`Year`, `2024`]);
console.log(mycarDetails);
// [ALHAMDULILLAH ta'ala Azzawajal]
//happy beginning ( yes i mean it:)
