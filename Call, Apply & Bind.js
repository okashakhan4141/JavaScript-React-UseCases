`use strict`

function add(test1, test2)
{
	return this.value + test1 + test2;
}

const obj1 = {
	value: 1
}

const obj2 = {
	value: 2
}

//call and apply will bind the function with the object that is being passed as a first argument
//the only diff b/w call and apply is that the way of passing other arguments (other than this) for a function  call

console.log(add.call(obj1, 2, 3));
console.log(add.apply(obj2, [2, 3]));

//the bind will bind the obj with function but instead of direct calling, it will return a binded function for later use

const addObj1 = add.bind(obj1);
console.log(addObj1(2, 5));