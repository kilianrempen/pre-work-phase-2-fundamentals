/*
 * Variables, Data Types, and Typing
 */

let wordData = "This is my word list string";

console.log(wordData);

let subtotal = 100;
let tax= subtotal * 0.07;
let totalWithTax = subtotal + tax;

console.log(totalWithTax);

let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
        obj2Key2: 50,
    }
}

console.log(obj.obj2.obj2Key1);

/* Typing Systems:
let variable : string = "mystring";
in Javascript we don't need to declare the type of variable
 */

let var1 = "2"
let var2 = 25
let result = var1 + var2;
console.log(result);
/*Javascript will convert one variable's type to match the other. Not all languages will do that.
* In this case it's converting the number to a string, so 2+25="225" It didn't add it appended!*/

/*OPERATORS*/

let add = 1+2;
let sub = 3-1;
let mult = 2*4;
let div = 4/2;
let mod = 5%2; /*mod returns the remainder after division*/

let string = "String1 " + "String2"
console.log(string);
