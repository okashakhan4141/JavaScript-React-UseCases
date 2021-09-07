/*
The map() method creates a new array with the results of calling a function for every array element.
It method calls the provided function once for each element in an array, in order.
It does not execute the function for empty elements.
It does not change the original array.
*/

// array.map - argument place holder
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)

/*
Output:
(3) ['<li>red</li>', '<li>green</li>', '<li>blue</li>']
*/

// another way
const r = {
  t: "check",
  m: "mate",
  c: 10.10
};
console.log('It is ' + r.t + r.m + ' for Player A. Game Stat:' + r.c);

//By using placeholders, the same example statement can be written more clearly, as follows:
console.log('It is %s%s for Player A. Game Stat: %d', r.t, r.m, r.c);

/*
Output:
It is checkmate for Player A. Game Stat:10.1
It is checkmate for Player A. Game Stat: 10
*/
