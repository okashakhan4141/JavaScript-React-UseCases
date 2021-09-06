`use strict`

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 8, 12);


// arguments keyword doesn't work with arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
//addArrow(2, 5, 8); //Error