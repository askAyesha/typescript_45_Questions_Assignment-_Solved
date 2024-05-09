"use strict";
//You just heard that one of your guests can’t make the dinner, so you need to send out a new 
// set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.//
Object.defineProperty(exports, "__esModule", { value: true });
// let's simply paste a previous guest list 
let guestlist1 = [`kashaf`, `sania`, `Hira`];
//let's replace the guest name the one isnt available with another available.
guestlist1[1] = `Hamna`;
//let's declare the print statement by the help of "for loop method" .
for (let i = 0; i < guestlist1.length; i++) {
    console.log(`hello sistaz ${guestlist1[i]} you are invited on tonight's dinner.}
`);
    // stating name of the guest who will not join on the dinner .
    let unavailableguest = "sania";
    console.log(`"${unavailableguest}" is not going to join us on the dinner tonight.`);
}
