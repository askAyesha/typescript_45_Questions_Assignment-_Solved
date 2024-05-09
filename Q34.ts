/*Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
the pizza. For each pizza you should have one line of output containing a simple statement like I like 
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
output should consist of three or more lines about the kinds of pizza, you like and then an additional 
sentence, such as I really love pizza!*/

 let Pizzas = [ `tandoori pizza`, `bbq pizza` , `veg pizza`];

 //loop 
 for (let i = 0; i < Pizzas.length; i++){
    console.log(Pizzas[i])
 }


 //printing along with a sentence 
 for (let i = 0; i < Pizzas.length; i++){
    console.log( ` i like ${Pizzas [i]}`);
 }
console.log( ` i really like to eat pizzas . pizza comes in a vast variety of flavours and toppings , allowing individuals to customize it to their liking. \n i really love pizzas`);