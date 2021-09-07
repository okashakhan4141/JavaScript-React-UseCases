`use strict`

// for each

const print = value => console.log(value);

const arr = [`okasha`, `khan`, `CADM`];
arr.forEach(print);

// other way
console.log(`******** Other Way`);
arr.forEach(
	function (value)
	{
		console.log(value);
	}
);