"use strict";
/*Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed*/
Object.defineProperty(exports, "__esModule", { value: true });
let usernames1 = [`user1`, `admin`, `user2`, `user3`, `user4`, `Ayesha`];
// remove all members in arry.
usernames1 = [];
//loop method 
if (usernames1.length > 0) {
    for (let i = 0; i < usernames1.length; i++) {
        if (usernames1[i] == `admin`) {
            console.log(`Hello ${usernames1[i]}, would you like to see a 
        status report?`);
        }
        else {
            console.log(` hello, ${usernames1[i]} thank you for loging in again`);
        }
    }
}
else {
    console.log(` We need to find some users! `);
}
