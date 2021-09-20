// data
const characters = [
  {
    name: "Mubeen",
    height: 177,
    weight: 71,
    gender: "male",
  },
  {
    name: "Shayan",
    height: 172,
    weight: 71,
    gender: "male",
  },
  {
    name: "Adeel",
    height: 182,
    weight: 76,
    gender: "male",
  },
  {
    name: "Kid",
    height: 145,
    weight: 55,
    gender: "female",
  },
];

//  ***** Array Filter Method *****
/*
The filter() method creates an array filled with all array elements that pass a test (provided by a function).
It does not change the original array.
*/

// getting male characters
const maleCharacters = characters.filter(
  (character) => character.gender !== "female"
);
console.log(maleCharacters); // will display Mubeen, Adeel & Shayan objects

//  getting < 175 height characters
const characters175Height = characters.filter(
  (character) => character.height < 175
);
console.log(characters175Height); // will display Shayan & Kid objects

// ***** Array Map Method *****
/*
The map() method creates a new array with the results of calling a function for every array element.
It does not change the original array.
*/

// getting names array
const names = characters.map((character) => character.name);
console.log(names); // (4) ['Mubeen', 'Shayan', 'Adeel', 'Kid']

// getting heights array
const heights = characters.map((character) => character.height);
console.log(heights); //  (4) ['177', '172', '182', '145']

// ***** Array Some Method *****
/*
The some() method checks if any of the elements in an array pass a test (provided as a function).
It return true/false.
*/

// is there at least any female character?
const anyFemale = characters.some((character) => character.gender === "female");
console.log(anyFemale); // returns true because female character exists in characters array

// is there any character taller than 200?
const anyTallerThan200 = characters.some((character) => character.height > 200);
console.log(anyTallerThan200); // returns false because no character is taller than 200 in characters array

// ***** Array Sort Method *****
/*
The sort(a, b) method sorts the elements in either acsending (a - b) order or descending order (b - a).
If result is -ve, (a) is sorted before (b)
If result is +ve, (b) is sorted before (a)
*/

// sorting objects based on heights in acsending order
const namesInAscendingOrder = characters.sort((a, b) => a.height - b.height);
console.log(namesInAscendingOrder);

// sorting objects based on names in acsending order
const namesInDescendingOrder = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
console.log(namesInDescendingOrder);

// sorting objects based on genders -> females first, then males
const femaleFirst = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log(femaleFirst);

// ***** Array Reduce Method *****
/*
The reduce() method executes a reducer function for each value of an array and returns a single value
 which is the function's accumulated result.
*/

// total heights of all characters
const totalHeight = characters.reduce((acc, cur) => {
  return acc + cur.height;
}, 0); // initially acc = 0 and it contains resultant value... cur is the value of each index
console.log(totalHeight); // 676

// total characters by their weights
const charactersByTheirWeights = characters.reduce((acc, cur) => {
  const weight = cur.weight;
  if (acc[weight]) acc[weight]++;
  else acc[weight] = 1;
  return acc;
}, {}); // initially acc = {} (empty object) and it contains resultant values... cur is the value of each index
console.log(charactersByTheirWeights);

// ***** Array Every Method *****
/*
The every() method returns true if all elements in an array pass a test (provided as a function).
If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
If no false occur, every() returns true.
*/

// does every character has height > 120?
const allHeightMoreThan120 = characters.every(
  (character) => character.height > 120
);
console.log(allHeightMoreThan120); // true

// is every character male?
const isEveryoneMale = characters.every(
  (character) => character.gender === "male"
);
console.log(isEveryoneMale); // false
