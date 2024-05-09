"use strict";
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
// each person, inviting them to dinner.//
Object.defineProperty(exports, "__esModule", { value: true });
//let's make a guest list first to invite .
let guestlist = [`kashaf`, `sania`, `Hira`];
//let's declare a print statement for each trans by using a list (loop) method 
for (let i = 0; i <= 2; i++) {
    console.log(`Dear Friend,
     "${guestlist[i]}", we'd love to have you join us for a get to gather  dinner at our place. Let's enjoy some good food, laughter, and great company together.
     Date: [5th March]
     Time: [at 8pm]
     Location: [atcetera]
     Warmest regards,`);
}
