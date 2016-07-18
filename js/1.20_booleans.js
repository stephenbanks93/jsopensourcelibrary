//BOOLEANS//

//Booleans statements are either "true" or "false".

var bool1 = Boolean(10 < 11); //True

var bool2 = Boolean(19 > 20); //False
//            ^^^ This is the boolean function, 

console.log(bool1);

console.log(bool2);
console.log("----------");

//While this is the function for booleans, you can
//simply use "console.log()" as seen in the examples below

//Comparison Operators//

//Examples of true statments using comparison operators

// Equal to
console.log(2 == 2);

// Equal to in type and value
console.log(5 === 5);

// Not equal to
console.log("4" != "5");

// Not equal to in type and value
console.log(5 !== "5");

// Greater than
console.log(7 > 6);

// Less than
console.log(8 < 9);

// Less than or equal to
console.log(6 <= 8);

// Greater than or equal to
console.log(10 >= 9);

console.log("----------");
//A couple examples of false statments 

console.log(30 == 10);

console.log("6" === "7");

console.log(4 != "4");

console.log(7 !== 7);
console.log("----------");

//Things without a "real" value are false
//therefore, the Boolean function can tell us
//what has a "real" value

//Examples of "real" values

console.log(Boolean(1));//"1" has a real value whereas "0" does not,
console.log(Boolean(0));//so "1" is true and "0" is false
						//Basic "on/off" concept
console.log("----------");

//Other "real" values
//Integers are "real" because they are real numbers on a numberline
//so they return "true"

console.log(Boolean(-4));

console.log(Boolean(2 + 8));

console.log(Boolean(2.5));

//strings that are not empty return "true"

console.log(Boolean("string"));
console.log("----------");

//Not "real" values return "false"

console.log(Boolean(0));//zero returns "false"

console.log(Boolean(-0));//negative zero returns "false"

console.log(Boolean(""));//empty strings return "false"

var x;
console.log(Boolean(x));//undefined variables return "false"

var y = null;
console.log(Boolean(y));//value of null is "false"

var z = false;
console.log(Boolean(z));//you can also assign the value of "false" to a variable

console.log(Boolean(50 / "ten"));//this is false because "ten" is not a number 
console.log("----------");

//Logical Operators//

console.log(1 < 10 && 10 > 5);//returns "true" if both statements are true
console.log(6 > 2 && 9 < 8);//returns "false" if only one statement is true

console.log(5 > 3 || 7 < 14);//returns "true" if both are true
console.log(2 > 9 || 6 > 4);//returns "true" if only one statement is true
console.log(3 < 1 || 7 < 4);//returns "false" if both statements are false

console.log("statement is not " + !(2 == 6));
//                                ^ if statement is not true, returns "true"