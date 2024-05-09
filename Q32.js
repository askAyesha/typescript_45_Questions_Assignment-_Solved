"use strict";
/*Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
accepted.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = [`ayesha`, `Sania`, ` Hira`, ` Hamna `, `Kashaf`];
let new_users = [`Ayesha`, `mahnoor`, ` hira`, ` KAHSAF`, `Noor`];
//  forEach loop method  
new_users.forEach(new_user => {
    let new_userlower = new_user.toLocaleLowerCase();
    // using some() method to match both , 
    let usernameTaken = current_users.some(new_user => new_user.toLocaleLowerCase() == new_userlower);
    if (usernameTaken) {
        console.log(`${new_user} needs to enter a new username because it is already taken `);
    }
    else {
        console.log(`${new_user} is the username available`);
        current_users.push(new_user);
    }
});
