// Array Object
// The Array object is used to store multiple values in a single variable:
const cars = ["Saab", "Volvo", "BMW"];


// MASTER LIST OF ARRAY METHODS
/*
concat()				Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()		Copies array elements within the array, to and from specified positions
entries()				Returns a key/value pair Array Iteration Object
every()					Checks if every element in an array pass a test
fill()					Fill the elements in an array with a static value
filter()				Creates a new array with every element in an array that pass a test
find()					Returns the value of the first element in an array that pass a test
findIndex()			Returns the index of the first element in an array that pass a test
forEach()				Calls a function for each array element
from()					Creates an array from an object
includes()			Check if an array contains the specified element
indexOf()				Search the array for an element and returns its position
isArray()				Checks whether an object is an array
join()					Joins all elements of an array into a string
keys()					Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()		Search the array for an element, starting at the end, and returns its position
map()						Creates a new array with the result of calling a function for each array element
pop()						Removes the last element of an array, and returns that element
push()					Adds new elements to the end of an array, and returns the new length
reduce()				Reduce the values of an array to a single value (going left-to-right)
reduceRight()		Reduce the values of an array to a single value (going right-to-left)
reverse()				Reverses the order of the elements in an array
shift()					Removes the first element of an array, and returns that element
slice()					Selects a part of an array, and returns the new array
some()					Checks if any of the elements in an array pass a test
sort()					Sorts the elements of an array
splice()				Adds/Removes elements from an array
toString()			Converts an array to a string, and returns the result
unshift()				Adds new elements to the beginning of an array, and returns the new length
valueOf()				Returns the primitive value of an array
*/

// ========================================================================
// JavaScript Array concat()
/*
Definition and Usage
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.

Syntax
array1.concat(array2, array3, ..., arrayX)

Parameters
array2	Required
array3	The arrays to be joined
...
arrayX
*/
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const concatArray = arr1.concat(arr2);
console.log(concatArray); //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

const arr3 = ["Robin"];
const concatArray2 = arr1.concat(arr2, arr3);
console.log(concatArray2); //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin']

// ========================================================================
// JavaScript Array copyWithin()
/*
Definition and Usage
The copyWithin() method copies array elements to another position in the array.
The copyWithin() method OVERWRITES! the existing values.
The copyWithin() method does not add items to the array.

Syntax
array.copyWithin(target, start, end)

Parameters
target	Required	index where it starts pasting into
start		Optional	index where it starts copying from
end			Optional	index where it stops copying from
 */
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0)); //['Banana', 'Orange', 'Banana', 'Orange']
console.log(fruits); //['Banana', 'Orange', 'Banana', 'Orange']

fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits); //['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

console.log(fruits.copyWithin(2, 0, 3)); //['Banana', 'Orange', 'Banana', 'Orange', 'Apple']

// ========================================================================
// JavaScript Array entries()
/*
Definition and Usage
The entries() method returns an Array Iterator object with key/value pairs:
The entries() method does not change the original array.

Syntax
array.entries()

Parameters
NONE

Return Value
An iterable		An array with key/value pairs.
*/
const f = fruits.entries(); //f becomes an iterable array with key-value pairs
console.log(f); //Array Iterator {}
for (let x of f) { document.getElementById("test").innerHTML += x + "<br>";}

// ========================================================================
// JavaScript Array every()
/*
Definition and Usage
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array

Syntax
array.every(function(currentValue, index, arr), thisValue)
 */
const ages = [32, 33, 16, 40];
console.log(ages.every((element) => { return element > 18; })); //false

// ========================================================================
// JavaScript Array fill()
/*
Definition and Usage
The fill() method fills specified elements in an array with a value.
The fill() method overwrites the original array.
Start and end position can be specified. If not, all elements will be filled

Syntax
array.fill(value, start, end)

Parameters
value		Required. The value to fill in.
start		The start index (position). Default is 0.
end			The stop index (position). Default is array length
*/
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi");
console.log(fruits2); //['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']

fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi", 2, 3);
console.log(fruits2); //['Banana', 'Orange', 'Kiwi', 'Mango']

// ========================================================================
// JavaScript Array filter()
/*
Definition and Usage
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.

Syntax
array.filter(function(currentValue, index, arr), thisValue)
*/
const ages2 = [32, 33, 16, 40];
const over18 = ages2.filter((element) => {return element >= 18;})
console.log(over18); //[32, 33, 40]

// ========================================================================
// JavaScript Array find()
/*
Definition and Usage
The find() method RETURNS the VALUE of the FIRST ELEMENT that passes a test.
The find() method executes a function for each array element.
The find() method retuns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.

Syntax
array.find(function(currentValue, index, arr),thisValue)
*/

const ages3 = [3, 10, 18, 20, 25, 32];
let findTheFirstOver18 = ages3.find(element => { return element > 18 });
console.log(findTheFirstOver18); //20

// ========================================================================
// JavaScript Array findIndex()
/*
Definition and Usage
The findIndex() method executes a function for each array element.
The findIndex() method returns the index (position) of the first element that passes a test.
The findIndex() method returns -1 if no match is found.
The findIndex() method does not execute the function for empty array elements.
The findIndex() method does not change the original array.

Syntax
array.findIndex(function(currentValue, index, arr), thisValue)
*/
let findIndexOfFirstOver18 = ages3.findIndex((element) => { return element > 18 });
console.log(findIndexOfFirstOver18); //3

// ========================================================================
// JavaScript Array forEach()
/*
Definition and Usage
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Syntax
array.forEach(function(currentValue, index, arr), thisValue)
*/
const numbers = [65, 44, 12, 4, 13, 7, 18, 92];
let sum = 0;
numbers.forEach((element) => { sum += element });
console.log(sum);

numbers.forEach((element, index) => { console.log(`[${index}], ${element}`) })


// ========================================================================
// JavaScript  Array.from()
/*
Definition and Usage
The Array.from() method returns an array from any object with a length property.
The Array.from() method returns an array from any iterable object.
The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

Syntax
Array.from(object, mapFunction, thisValue)
*/

console.log(Array.from('foo')); //["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); //[2, 4, 6]

// ========================================================================
// JavaScript Array includes()
/*
Definition and Usage
The includes() method returns true if an array contains a specified value.
The includes() method returns false if the value is not found.
The includes() method is case sensitive.

Syntax
array.includes(element, start)
*/
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
console.log(fruits3.includes("Mango")); // true
console.log(fruits3.includes("Banana", 1)); // false

// ========================================================================
// JavaScript Array indexOf()
/*
Definition and Usage
The indexOf() method returns the first index (position) of a specified value.
The indexOf() method returns -1 if the value is not found.
The indexOf() method starts at a specified index and searches from left to right.
By default the search starts at the first element and ends at the last.
Negative start values counts from the last element (but still searches from left to right).

Syntax
array.indexOf(item, start)
*/
console.log(fruits3.indexOf("Apple")); //2
console.log(fruits3.indexOf("Apple", 3)); //4
console.log(fruits3.indexOf("Banana", -3)); //5
console.log(fruits3.indexOf("Apple", -1)); //6

// ========================================================================
// JavaScript Array.isArray()
/*
Definition and Usage
The isArray() method returns true if an object is an array, otherwise false.

Syntax
Array.isArray(obj)
*/
console.log(Array.isArray(fruits3)); //true

let text = "ThisIsASampleString"
console.log(Array.isArray(text)); //false

// ========================================================================
// JavaScript Array join()
/*
Definition and Usage
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).

Syntax
array.join(separator)
*/
console.log(fruits3.join()); //Banana,Orange,Apple,Mango,Apple,Banana,Apple
console.log(fruits3.join(" and ")); //Banana and Orange and Apple and Mango and Apple and Banana and Apple

// ========================================================================
// JavaScript Array keys()
/*
Definition and Usage
The keys() method returns an Array Iterator object with the keys of an array.
The keys() method does not change the original array.

Syntax
array.keys()
*/
let keys = fruits3.keys();
console.log(keys); //Array Iterator {}

let text2 = "";
for (let x of keys) { text2 += x + " " };
console.log(text2); //0 1 2 3 4 5 6

//You can also use the built in Object.keys() Method:
console.log(Object.keys(fruits3)); //['0', '1', '2', '3', '4', '5', '6']

// ========================================================================
// JavaScript Array length
/*
Definition and Usage
The length property sets or returns the number of elements in an array.

Syntax
array.length
*/
console.log(fruits.length); //5
console.log(fruits2.length); //4
console.log(fruits3.length); //7

//also works on strings (because strings is an array of char), it is also a string method
console.log(text.length); //19

// ========================================================================
// JavaScript Array lastIndexOf()
/*
Definition and Usage
The lastIndexOf() method returns the last index (position) of a specified value.
The lastIndexOf() method returns -1 if the value is not found.
The lastIndexOf() starts at a specified index and searches from RIGHT TO LEFT!.
By defalt the search starts at the last element and ends at the first.
Negative start values counts from the last element (but still searches from RIGHT TO LEFT!).

Syntax
array.lastIndexOf(item, start)
*/
console.log(fruits3); //['Banana', 'Orange', 'Apple', 'Mango', 'Apple', 'Banana', 'Apple']
console.log(fruits3.lastIndexOf("Apple")); //6
console.log(fruits3.lastIndexOf("Banana")); //5
console.log(fruits3.lastIndexOf("Orange", -6)); //5
console.log(fruits3.lastIndexOf("Orange", -7)); //-1, not found, because it searches from RIGHT TO LEFT!

// ========================================================================
// JavaScript Array map()
/*
Definition and Usage
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.

Syntax
array.map(function(currentValue, index, arr), thisValue)
*/
console.log(numbers); //[65, 44, 12, 4, 13, 7, 18, 92]
let mutipliedBy10Array = numbers.map((element) => { return element * 2 });
console.log(mutipliedBy10Array); //[130, 88, 24, 8, 26, 14, 36, 184]

let squaredArray = numbers.map((element) => { return element ** 2 });
console.log(squaredArray); //[4225, 1936, 144, 16, 169, 49, 324, 8464]
