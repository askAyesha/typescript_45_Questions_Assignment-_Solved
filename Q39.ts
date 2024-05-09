/*Write a function called city_country() that takes in the name of a city and its country. The 
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
three city-country pairs, and print the value that’s returned.*/

function city_country(  city : string , country: string){ return `"${city}, ${country}"`

};
// calling the function 3 times 
console.log (city_country( `jeddah`, `KSA`));
console.log (city_country( `Lahore`, `pakistan`));
console.log (city_country( `tokyo`, `japan`));

