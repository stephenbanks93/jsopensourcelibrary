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

//The "push()" function

var arr4 = ["a2", "b2", "c2", "d2"];

var b = function(){
	arr4.push("e2");
	return arr4;
};

console.log(b());

//The "shift()" function - similar to the "pop()" function

var arr5 = ["a3", "b3", "c3", "d3"];

var c = function(){
	arr5.shift();
	return arr5;
};

console.log(c());

//The "unshift()" function - similar to the "push()" function

var arr6 = ["a4", "b4", "c4", "d4"];

var d = function(){
	arr6.unshift("e4");
	return arr6;
};

console.log(d());

//It is possible to directly alter the index of an array

var arr7 = ["aa", "ba", "ca", "da"];

var e = function(){
	arr7[0] = "za";
	return arr7;
};

console.log(e());

//Another interesting way to add items to an array

var arr8 = ["ab", "bb", "cb", "db"];

var f = function(){
	arr8[arr8.length] = "eb";
	return arr8;
};

console.log(f());

//It is also possible to flat out delete items from an array
//(Tends to leave holes in the array)

var arr9 = ["ac", "bc", "cc", "dc"];

var g = function(){
	delete arr9[3];
	return arr9;
};

console.log(g());

//Array splicing

var arr10 = ["ad", "bd", "cd", "dd"];

var h = function(){
	arr10.splice(2, 0, "ed", "fd");
	return arr10;
};

console.log(h());

//The "splice()" function can remove items

var arr11 = ["ae", "be", "ce","de"];

var i = function(){
	arr11.splice(0, 1);
	return arr11.join(", ");
};

console.log(i());

//Array joining

var arrA = ["1", "2", "3"];
var arrB = ["4", "5", "6"];

var ii = function(){
	return arrA.concat(arrB).join(", ");
};

console.log(ii());

//Array slicing

var arrC = ["A", "B", "C", "D"];

var arrC1 = arrC.slice(1);

console.log(arrC.join(", "));

console.log(arrC1.join(", "));




