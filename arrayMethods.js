const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 10 },
  { name: "Book", price: 10 },
];

//Method 1: Filter

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

//console.log(filteredItems);

//Method 2: Map /* Taking one array and extracting particular property from the array */

const itemNames = items.map((item) => {
  return item.name;
});

//console.log(itemNames);

//Method 3: Find /* Returns the first true object found in the array, if there are multiple objects it will return the first true object */
const foundItems = items.find((item) => {
  return item.name === "Book";
});

//console.log(foundItems);

//Method 4: For each

items.forEach((item) => console.log(item.name)); //Prints out every item name in the item list, work as a for loop till the end of the array
items.forEach((item) => {
  if (item.name === "Book") {
    console.log(item.name + " found");
  }
});

//Method 5: Some /* returns true for any first true value found */

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 10;
});

//console.log(hasInexpensiveItems);

//Method 6: Every /* returns true if all the items fall under the true condition else returns false */

const hasnoItemPricedHigherThan1000 = items.every((item) => {
  return item.price <= 1000;
});

//console.log(hasnoItemPricedHigherThan1000);

//Method 7: Reduce /* for the code below what it does is that it takes all the price property of the objects and returns its sum */
const totalPrice = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(totalPrice);

//Methods 8: Includes

const numbers = [1, 2, 3, 4, 5];
const hasBook = numbers.includes(5);
console.log(hasBook);
