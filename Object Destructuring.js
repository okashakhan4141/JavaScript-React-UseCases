`use strict`

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: ['Via Angelo Tavanti 23, Firenze, Italy'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};


const { name, categories } = restaurant;
console.log(name, categories);

//changing names
const {
  name: restaurantName,
  categories: tags,
} = restaurant;

console.log(restaurantName, tags);

// Default values + Alias
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// since a and b are already defined so enclosing them in ()
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri: { open: o, close: c }} = openingHours;
console.log(o, c);

//Nested onjects (another way)
const {fri: friday} = openingHours;
console.log(friday);

const {open, close} = friday;
console.log(open, close);


// another example
// object
const person = {
  name: 'Mubeen',
  age: 22,
  func() {
    console.log("person.func has been called!", this);
    console.log('\n');
  }
};

//const name = person.name;
//const age = person.age

//const { name, age } = person; // same as above

const { name: nm, age: a } = person;  // person's name in nm and age in a
console.log(nm, a);

// Output: Mubeen 22
