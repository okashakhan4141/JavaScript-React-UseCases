'use strict'

//Functions
// implementing add functionality using different types of functions in JavaScript

//Simple Functoin
function simpleFunction(a, b)
{
    return a+b;
}

//function expressions
const functionExpression = function (a, b)
{
    return a+b;
}

//arrow function
const arrowFunction = (a, b) => a+b;

//testing
console.log(simpleFunction(5, 6));
console.log(functionExpression(5, 6));
console.log(arrowFunction(5, 6));