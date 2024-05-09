/*Working with one of the programs from Exercises 14 through 18, print a message indicating 
the number of people you are inviting to dinner.
*/ 

let guestlist_:string[] = [ `kashaf`, `sania`, `Hira`];
console.log(` i am inviting these ${guestlist_.length} following people on my dinner`)

for(let i =0; i <guestlist_.length; i ++)[
    console.log( `${i +1}. ${guestlist_[i]}`)
];
