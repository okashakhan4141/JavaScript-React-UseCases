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