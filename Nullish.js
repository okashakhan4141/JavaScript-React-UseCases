`use strict`

// Falsy Values are:
// undefined , null , NaN , 0 , "" and false

// The Nullish Coalescing Operator
const number = null
let result = number || 10;
console.log(result);

// Nullish: null and undefined (NOT 0 or '')
// only `null` and `undefined` will give 10
result = number ?? 10;
console.log(result);