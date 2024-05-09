"use strict";
/* Write a function called describe_city() that accepts the name of a city and its country. The
function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities, at least one of which is not in the
default country.*/
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(nameofcity, country = `pakistan`) {
    return `${nameofcity} is in ${country}`;
}
;
// describing  diff cities
let city1 = describe_city(` karachi`);
let city2 = describe_city(` islamabad`);
let city3 = describe_city(` Lahore`);
let diff_city = describe_city(` Tokyo`, `japan`);
console.log(city1);
console.log(city2);
console.log(city3);
console.log(diff_city);
