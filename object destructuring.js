// object destructuring

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
