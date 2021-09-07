`use strict`

// let/const/var

//var -> function scoped
//let and const -> block scoped

//accessing x and y here will give error since they are block scoped
{
  let x = 10;
  const y = 7
}
//console.log(x);
//console.log(y);

//in case of var, since it is function scoped so we can access it after block
{
  var x = 5;
}
console.log(x); // will print 5

//variables declared with var can be access above their declaraation but it will print undefined

console.log(temp);  // print undefined
var temp = 6;

//variables declared with let and const will give error due to TDZ
// TDZ -> Temporal Dead Zone

//console.log(ex1); //Error
//console.log(ex2); //Error

let ex1 = 0;
const ex2 = -1;

// const value is immutable and give error if we try to change it
const temp = 123;
//temp = 111; // error
console.log(temp);
