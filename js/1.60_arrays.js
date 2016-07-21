//Arrays//

//Arrays are initialized like variables except, their values are enclosed in square brackets "[]"

var carMake = ["Ferrari", "Aston Martin", "Porche", "Mercedes Benz"]; //This is an array

console.log(carMake); //You can log the entire array as it sits

//You can also use the keyword "new" to create an array

var names = new Array("John", "Ron", "Paul", "Kyle");

console.log(names);

//Each item in an array can be accessed multiple ways

//the contents are labeled like this

//                 0.        1.        2.       //Arrays begin at "0"
var container = ["item 1", "item 2", "item 3"];

console.log(container[2]); //You can log each item in an array one at a time individualy
console.log(container[1]);
console.log(container[0]);
 
//Arrays can be sorted alphabetically

var boxOf = ["Magazines", "DvDs", "VHS Tapes", "Books"];

console.log(boxOf.sort());

//They can also be sorted reverse alphabetically

var space = ["Planets", "Stars", "Dark Matter", "Black Holes"];

console.log(space.reverse());

//One thing to note is that in javascript, arrays are "objetcs" as far as "type" is concerned

console.log(typeof space); //The array named "space" returns in the console as an "object"

//Array Methods//

//Arrays can be converted into a string

var arr1 = ["1", "2", "3", "4"];

console.log(arr1.toString()); //prints array to console, with each item separated by commas

//Another function that can be accessed is "join()"

var arr2 = ["a", "b", "c", "d"];

console.log(arr2.join("|")); //Prints array to console, with each item separated by a user designated character

//The "pop()" function

var arr3 = ["a1", "b1", "c1", "d1"];

var a = function(){
	arr3.pop();
	return arr3;
};
 
console.log(a());






