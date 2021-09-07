/**
 * The let keyword was introduced in ES6 (2015).
 * Variables defined with let cannot be REDECLARED.
 * Variables defined with let must be Declared before use.
 * Variables defined with let have Block Scope.
 */

//USE CASE 01: Block Scope of Let

const letFunction = function () {
    for (let x = 0; x<5; x++){
        console.log(x);
    }

    /* The statement below will return a error, because let is only confined to the block of for loop
     * console.log(x);
     */

}



const varFunction = function () {
    for (var x = 0; x<5; x++){
        console.log(x)
    }

    console.log(x)
}

//varFunction();

//CONST in ES6

/*
* The const keyword was introduced in ES6 (2015).
* Variables defined with const cannot be Redeclared.
* Variables defined with const cannot be Reassigned.
* Variables defined with const have Block Scope.
*/

/* When to use ES6
 * As a general rule, always declare a variable with const unless you know that the value will change.
 * Use const when you declare:
   * A new Array
   * A new Object
   * A new Function
   * A new RegExp
 */

const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;   // This will also give an error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars);

// But you can NOT reassign the array:

const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR