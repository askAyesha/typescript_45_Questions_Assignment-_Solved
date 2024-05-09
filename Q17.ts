// You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.


// here is the program from ex no 16//
let guestlist2:string[] = [`Misbah`, `kashaf`, `Mahnoor` ,`sania`, `Hira` ,(`noor fatima`)];

//letting them know that we cant make all of us together as the table wont arrive .and  the space remains for two people only.
console.log(` we are sorry to inform you that, we can only invite two persons`);

// removing guest 1 
let guest1=guestlist2.pop();
console.log (`sorry to inform Miss ${guest1} you are not invited `);
// removing guest 2
let guest2=guestlist2.pop();
 console.log (`sorry to inform Miss ${guest2} you are not invited `);
 // removing guest 3//
 let guest3=guestlist2.pop();
 console.log (`sorry to inform Miss ${guest3} you are not invited `);
 //removing guest 4//
 let guest4=guestlist2.pop();
 console.log (`sorry to inform Miss ${guest4} you are not invited `);
  
 //now let's print the message to the ones invited on the dinner .//

 for (let i= 0; i < guestlist2.length; i ++){
    console.log(`miss ${guestlist2 [i]} you are still invited on the dinner tonight.`);
 }
 // emptying the list//
 guestlist2.pop();
guestlist2.pop();

//let's print the empty list . 
console.log(guestlist2);