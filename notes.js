Arrays
is a list like object that is made up of a collection of values mapped to corrasponding integer keys. Starting at 0.
~Starts at 0.
*Example *
	var names =[‘beth’, ‘anne’, ‘ben’, ‘greg’];
console.log(names.length);
//  4
Indexing
	var zoo = [‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];
zoo[2];
// lion
Add items to the end, “push”.
	var zoo = [‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];
zoo.push(‘ox’);
zoo;
// [‘Zebra’, ‘rhino’, ‘lion’, ‘monkey’, ‘ox’]
Remove item from the end, “pop”
var freeAnimal = zoo.pop();
// ‘ox’
zoo;
// [‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];
- 
Add Item to the beginning, Unshift
var zoo = [‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];
zoo.unshift(‘Koala’);
// 5

zoo;
// [‘koala’, ‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];

Remove item from beginning, Shift
var zoo = [‘koala’, ’zebra’, ‘rhino’, ‘lion’, ‘monkey’];
var freeAnimal = zoo.shift();
// ‘emu’

zoo;
// [‘zebra’, ‘rhino’, ‘lion’, ‘monkey’];

Overwrite item at specific index, 
var meals = [‘breakfast’, ‘lunch’, ‘dinner’];
meals[1] = ‘second breakfast’;

meals;
// [‘breakfast’, ‘second lunch’, ‘dinner’];

Copy an Array
var nums = [12, 7, 9, 14];
var numCopy = nums.slice();

numCopy;
// [12, 7, 9, 14]

Modifying an Array with Splice()
var nums = [12, 7, 9, 14];

nums.splice(1, 0, 23, 54);
1 position, 0 items removing, 23 & 54 getting added

nums;
// [12, 23, 54, 9, 14]

var pets = ['cat', 'bird', 'ferret', 'turtle'];
pets.splice(0,3);
// ['cat', 'bird', 'ferret']
pets;
// ['turtle']

// Splice an Arrary into an Array

var birds = ['turkey', 'hawk', 'goose'];
birds.splice(2, 0, ['duck', 'duck', 'goose']);
// []

birds;
// ['turkey', 'eagle', ['duck', 'duck', 'goose'], falcon]
