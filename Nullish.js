`use strict`

// Falsy Values are:
// undefined , null , NaN , 0 , "" and false

// The Nullish Coalescing Operator
const number = 0
let result = number || 10;
console.log(result);

// Nullish: null and undefined (NOT 0 or '')
// only `null` and `undefined` will give 10 i.e: false
result = number ?? 10;
console.log(result);
