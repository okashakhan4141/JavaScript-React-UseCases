`use strict`

//*************** Object Literal


// old syntax
function createPersonSimple(firstName, lastName)
{
    return {
        firstName: firstName,
        lastName: lastName
    };
}

console.log(createPersonSimple(`okasha`, `khan`));

// ES6 Syntax -> Object literal
function createPersonWithObjectLiteral(firstName, lastName)
{
    return {
        firstName,
        lastName
    };
}

console.log(createPersonWithObjectLiteral(`okasha`, `khan`));


//*************** String Literal

name = "okasha khan";

//using string -> the old way
console.log("my name is " + name);

//using string literal -> the ES6 way
console.log(`my name is ${name}`);