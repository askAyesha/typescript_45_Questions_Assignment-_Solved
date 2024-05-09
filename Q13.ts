//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use your list to print a series of statements about these items, such as 
//
//"I would like to own a Honda motorcycle.”//

//01 stroring a list of my favourite transportations in an arry named as myfavtrans

let myfavtrans:string[]=[ "car", "bus" ,"aeroplane", "helicopter" ,"ship", "bullet Train"];

  //let's declare a print statement for each trans by using a list (loop) method 
   for (let i = 0; i <= 5; i++){
    console.log (`i would like to own a/an ${myfavtrans [i]}`); }
