//In this file all the use cases of the arrow functions will be defined. 


//USE CASE 01: Getting rid of the function keyword

const functionWithKeyWord = function(){
    console.log("I am a function with the function keyword");
}


const functionWithoutKeyword = () => {
    console.log("I am a function without function keyword")
}

//functionWithoutKeyword();


//USE CASE 02: Shorter code

const functionBig = function () {
    return (2+2);
}

const functionSmall = () => 2+2;

//console.log(functionBig);
//console.log(functionSmall);


// USE CASE 03: Arrow function and this keyword

/*In the example below, it is not recommended to use the arrow function 
because it does not automatically binds the this keyword, if we use arrow 
function and the this keyword, it is going to return 'undefined'*/

/* Arrow functions work best when binding this to the context. It is often used in writing methods like map, reduce, filter and other array methods. */

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function () {
        return `This is a Canon camera of price ${this.price}`
    }

    /*myDes: () => return `This is a canon camera of price $(this.price)`    return undefined. 
    
    You automatically have to bind the this keyword when using arrow functions*/
}

console.log(cameras.myDes());


// USE CASE 4: Arrow Functions with parameters

// simple function
/*
function square(a) {
    return a * a;
}*/

// arrow function - in case of single parameter, we can remove paranthesis
const square = a => a * a;  // since function has single line of code, so we can remove {} and also return keyword

//simple function
/*
const add = function (a, b) {
    return a + b;
};
*/

// arrow function - multiple parameters
const add = (a, b) =>  a + b;


// USE CASE 5: Arrow function as an argument to another function

// simple function 
/*
setTimeout(function () {
  console.log("Executed after 3 second");
}, 3000);
*/

// arrow function
setTimeout(() => console.log("Executed after 3 second"), 3000);


// USE CASE 6: Apply filter and map using array function

// data
const donated = [{ name: "Xavier", age: 19, city: "LA", donation: 20 },
{ name: "David", age: 16, city: "georgia", donation: 20 },
{ name: "Amanda", age: 18, city: "wahingon DC", donation: 20 },
{ name: "Amy", age: 20, city: "chicago", donation: 20 },
{ name: "Jesicca", age: 28, city: "LA", donation: 20 },
{ name: "Alex", age: 15, city: "LA", donation: 20 }];

// simple functions
/*
const donate = donated.filter(function (donated) {
  if (donated.age >= 18) {
    return true;
  }
});
console.log(" Donors above 18", donate);


const sum = donated.reduce(function (total, amount) {
  return total + amount.donation;
}, 0);
console.log("Total donations", sum);

*/

// arrow function
const donate = donated.filter((donated) => donated.age >= 18);
console.log(" Donors above 18", donate);

const sum = donated.reduce((total, amount) => total + amount.donation, 0);
console.log("Total donations", sum);
