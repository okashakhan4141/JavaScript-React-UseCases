// Sets
const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza',
  ]);
  console.log(ordersSet);
  
  // will create a set for characters in `okasha`
  console.log(new Set('okasha'));
  
  // size of set
  console.log(ordersSet.size);

  // checking values in set
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));

  // adding values
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');

  //deleting vslues
  ordersSet.delete('Risotto');

  // clearing whole set
  // ordersSet.clear();
  
  console.log(ordersSet);
  
  for (const order of ordersSet) console.log(order);
  
  // Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
  
  console.log(
	new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  console.log(new Set('okashakhan').size);