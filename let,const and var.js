'use strict'

`use strict`

// let/const/var

//var is function scoped
//let and const are block scoped

{
  let x = 10;
  const y = 7
}

//console.log(x);
//console.log(y);

//accessing x and y here will give error since they are block scoped

{
  var x = 5;
}

console.log(x); // will print 5

//in case of var, since it is function scoped so we can access it after block

//*********************************** */

//variables declared with var can be access above their declaraation
// but it will give undefined

console.log(temp);
var temp = 6;

//variables declared with let and const will give error due to TDZ
// TDZ -> Temporal Dead Zone

//console.log(ex1); //Error
//console.log(ex2); //Error

let ex1 = 0;
const ex2 = -1;