'use strict'

const obj = {
  firstName: `okasha`,
  lastNAme: `khan`,
  dob: `20 Dec, 1999`
};

const arr = [`okasha`, `khan`, `20 DEc`];

console.log(`------------FOR IN ON OBJ`);
//this will iterate over the properties of objects
for (const property in obj)
{
  console.log(property);
}

console.log(`------------FOR OF ON ARR`);
//this will iterate over the all iterable objects e.g: Arrays, Set, Maps etc
for (const value of arr)
{
  console.log(value);
}

console.log(`------------FOR OF ON OBJ`);
//will give error: Obj is not a iterable
// for (const property of obj)
// {
//   console.log(property);
// }

console.log(`------------FOR IN ON ARR`);
//will give the indexes
for (const value in arr)
{
  console.log(value, arr[value]);
}

//array.entries will give index and value pair i.e: [0, 'okasha']
const arr = [`okasha`, `khan`, `CADM`, `ISL`];

for (const [index, value] of arr.entries()) {
  console.log(`${index + 1}: ${value}`);
}
