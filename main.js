//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.

var resorts = [];

resorts.push('Keystone', 'Breck', 'A-basin', 'Copper');

console.log(resorts);
// ['Keystone', 'Breck', 'A-basin', 'Copper']

// 2. Add an additional item to the beginning of your Array.

resorts.unshift('Winter Park');

console.log(resorts);
// ['Winter Park', 'Keystone', 'Breck', 'A-Basin', 'Copper']

// 3. Remove the second and third items.
resorts.splice(1, 2);
// ['Keystone', 'Breck']

console.log(resorts);
//['Winter Park', 'A-Basin', 'Copper']

// 4. Add two new items after the second item.

resorts.splice(2, 0, 'Wolf Creek', 'Mary Jane');
resorts
//['Winter Park', 'A-Basin', 'Wolf Creek', 'Mary Jane', 'Copper']


// 5. Write 'The current length of the array is....' using the .length method
resorts.length
// 5

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things.splice(2, 1, 'keyboard');
console.log(things);
// ['mug', 'book', 'keyboard', 'plant', 'sunglasses']

// 7. Combine all of the elements of the array into a string.
things.toString();
// "mug,book,keyboard,plant,sunglasses"

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
things.pop();
var lastItem = things;
lastItem.unshift('First');
lastItem.push('End');
console.log(lastItem);
// ['First', 'mug', 'book', 'keyboard', 'plant', 'end']

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
itemLast = ['end', 'plant', 'keyboard', 'book', 'mug', 'First'];

// 10. Remove the first item of itemLast.
itemLast.shift();
console.log(itemLast);
// ["plant", "keyboard", "book", "mug", "First"]

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
itemLast.pop();
itemLast.pop();
itemLast.pop();
itemLast.pop();
itemLast.pop();

console.log(itemLast);
// []

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var newArray = firstArray.concat(secondArray);
console.log(newArray);
// [12, 5, 9, 27, 'fish', 'dog'];

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
people.push('Craig', 'Hunter');
// 7
console.log(people);
['Bill', 'Ted', 'Emily', 'Andrea', 'Doug', 'Craig', 'Hunter']

// 14. Remove everybody except 'Andrea' and 'Ted'
people.pop();
people.pop();
people.pop();
consle.log(people);
// ["Bill", "Ted", "Emily", "Andrea"]

people.shift();
console.log(people);
// ["Ted", "Emily", "Andrea"]

people.splice(1,1);
console.log(people);
// ["Ted", "Andrea"]

// 15. Add a new person to the beginning of the Array
people.unshift('Pablo');
console.log(people);
// ["Pablo", "Ted", "Andrea"]

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
people.sort();
// ["Andrea", "Pablo", "Ted"]

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = [array1, array2, array3];

console.log(array4);
// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.

var deadDog = array1.pop() + array3.shift();

console.log(array4);

// [
//	["Fido", "Spot", "Rex"],
//	["Bulldog", "Lab", "Dalmation", "Beagle"],
//  [Black", "Spotted", "Tri-color"]
// ]



// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.

sortingNumbers.sort();
// [2, 300, 5, 55, 77, 98]
It sorted least to greatest by the first number then after it. Very interesting.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var line1 = array1.splice(4, 1, 'dog');
// [2, "dog", 34, "Bill", "dog", "mug", 17]
var line2 = array1.pop();
// [2, "dog", 34, "Bill", "dog", "mug"]
var line3 = array1.pop();
// [2, "dog", 34, "Bill", "dog"]
var line4 = array1.splice(1, 1);
// [2, 34, "Bill", "dog"]
var line5 = array1.splice(1, 1);
// [2, "Bill", "dog"]
var line6 = array1.unshift(17);
// [17, 2, "Bill", "dog"]
var line7 = array1.unshift('plant');
// ["plant", 17, 2, "Bill", "dog"]

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
