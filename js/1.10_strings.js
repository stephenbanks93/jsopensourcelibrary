//STRINGS//

//Concatenation
//This is simple concatenation used to form
//sentences, phrases, and other things.

//Declare variables as strings

var birthCity = "Nashville";
var birthState = "Tennessee";

console.log(birthCity + ", " + birthState); //String plus ", " plus string

//STRING METHODS//
//The ".length" Method

var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("'string' variable is " + string.length + " characters long");
//".length" displays how many characters a string contains

//The ".indexOf" Method
//Locating strings inside of strings//

var example = "This is a string of text";

console.log(example.indexOf("a")); //This indicates where in the string, the word "a" begins 

//The ".lastIndexOf" Method

var example2 = "How much wood could a Woodchuck chuck if a Woodchuck could chuck wood?";

console.log(example2.lastIndexOf("wood")); //Indicates where the last iteration of "wood" begins

//The ".search" Method
//Pretty nuch the same as ".indexOf"

var example3 = "Hello World";

console.log(example3.search("World"));
//////////////////NOTE////////////////////

//In the examples of ".indexOf", ".lastIndexOf", and ".search",
//these methods count each character placement until it gets to 
//the character place just before the word you are trying to locate begins.




//Escape character "\"//

//Using double quotes inside double quotes
var _1 = "\"Hello\" World";

console.log(_1);

//Single quotes inside single quotes
var _2 = '\'Hello\' World';

console.log(_2);

//Inserting a backslash
var _3 = "Hello\\World";

console.log(_3);

//Moving text down to a new line
var _4 = "Hello\nWorld";

console.log(_4);

//Carriage return - Same function as "\n"
var _5 = "Hello\rWorld";

console.log(_5);

//Tab - Adds a tabbed space
var _6 = "Hello\tWorld";

console.log(_6);

//Backspace
var _7 = "\bHello World";

console.log(_7);

//Form feed
var _8 = "\fHello World";

console.log(_8);


/////////////////////////////////////
//Just something interesting i found//////////////////////
var symbol = "Displays this -> \u{20BB7} in the console";//////////////////////
                             //^^^^^^^^^ "Unicode Code Point Escape Sequences"/
console.log(symbol);///////////////////////////////////////////////////////////
/////////////////////