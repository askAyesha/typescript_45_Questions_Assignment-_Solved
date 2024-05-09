"use strict";
// Store a person’s name, and include some whitespace characters at the beginning and end of 
// the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
// once, so the whitespace around the name is displayed. Then print the name after striping the white 
// spaces.
Object.defineProperty(exports, "__esModule", { value: true });
// storing the name in a variable called here bellow (personName1) along with some whitespace chracters such as tab ("\t")and newlines ("\n");
let personName1 = "\t\nAyesha Noor\t\n";
// simply printing it 
// console.log(personName1);
// showed the whitespaces in result? YES!
// printing it along with trimming 
console.log(personName1.trim());
