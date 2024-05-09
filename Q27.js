"use strict";
/*Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien*/
Object.defineProperty(exports, "__esModule", { value: true });
let alien_C = `green`;
if (alien_C == `yellow`) {
    console.log(`player earned 10 points.`);
}
else if (alien_C == `green`) {
    console.log(`player earned 5 points.`);
}
else if (alien_C == `red`) {
    console.log(`player earned 15 points.`);
}
else {
    console.log(`player earned 0 point`);
}
;
// green done . 5 points.
let alien_C2 = `yellow`;
if (alien_C2 == `yellow`) {
    console.log(`player earned 10 points.`);
}
else if (alien_C2 == `green`) {
    console.log(`player earned 5 points.`);
}
else if (alien_C2 == `red`) {
    console.log(`player earned 15 points.`);
}
else {
    console.log(`player earned 0 point`);
}
;
// yellow done 10 points.
let alien_C3 = `red`;
if (alien_C3 == `yellow`) {
    console.log(`player earned 10 points.`);
}
else if (alien_C3 == `green`) {
    console.log(`player earned 5 points.`);
}
else if (alien_C3 == `red`) {
    console.log(`player earned 15 points.`);
}
else {
    console.log(`player earned 0 point`);
}
;
// red done 15 points .
// additional 
let alien_C_N = `no color`;
if (alien_C_N == `yellow`) {
    console.log(`player earned 10 points.`);
}
else if (alien_C_N == `green`) {
    console.log(`player earned 5 points.`);
}
else if (alien_C_N == `red`) {
    console.log(`player earned 15 points.`);
}
else {
    console.log(`player earned 0 point`);
}
;
// 0 point got the result in else statement.  [ comment for me/ because all of the above proved false.  did not match the st]
