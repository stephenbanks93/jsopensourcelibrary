//VARIABLES//

//As my first example, lets initialize a variable

var z; //variable "z" is initialized
       //but, it's value is "undefined".


var y = 1; //This variable now has a value of "one"
console.log("Variable declaration");
console.log(y);


//OPERATORS//

//ADDITION//

var addNum1 = 2; //addNum1 has the value of "two"
var addNum2 = 5; //addNum2 has the value of "five"
var addNum3 = addNum1 + addNum2; //addNum3 has the value of "addNum1" plus "addNum2"
console.log("Addition");                                 
console.log(addNum3);

//SUBTRACTION//

var subNum1 = 10; //"subNum1" has the value of "ten"
var subNum2 = 6; //"subNum2" has the value of "six"
var subNum3 = subNum1 - subNum2; //"subNum3" has the value of "subNum1" minus "subNum2"
console.log("Subtraction");
console.log(subNum3);

//MULTIPLICATION//

var multNum1 = 5; //"multNum1" has the value of "five"
var multNum2 = 6; //"multNum2" has the value of "six"
var multNum3 = multNum1 * multNum2; //"multNum3" has the value of "multNum1" times "multNum2"
console.log("Multiplication");
console.log(multNum3);

//DIVISION//

var divNum1 = 6; //"divNum1" has the value of "six
var divNum2 = 3; //"divNum2" has the value of "three"
var divNum3 = divNum1 / divNum2; //"divNum3" has the value of "divNum1" divided by "divNum2"
console.log("Division");
console.log(divNum3);

//DIVISION WITH MODULUS//
//Division with modulus will only display the "Remainder"

var modNum1 = 7;
var modNum2 = 3;
var modNum3 = modNum1 % modNum2;
console.log("Modulus division");
console.log(modNum3);

//INCREMENTS//
//Adding one

var i = 2; //
var f = ++i;
console.log("Increments +");
console.log(f);

//Subtracting one

var t = --i;
console.log("Increments -");
console.log(t);

//Assignment Operators ("=" is an assignment operator)

var k = 4;
var j = 2;

console.log("Assignment Operators");
console.log(k += j); //Add
console.log(k -= j); //Subtract
console.log(k *= j); //Multiply
console.log(k /= j); //Division

var modK = 5;
var modJ = 2;

console.log(modK %= modJ); //Division With "Remainder Only"