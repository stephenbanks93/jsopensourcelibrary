//Functions//

//Functions begin with the keyword "function"//

function addFunction(x , y){ //Variables within this function are local to this function and are initialized here
	
	return x + y; //When this function is called, will return the sum of the values of "x" and "y"

};
console.log(addFunction(5, 5));//Calls upon the declared function, logs the result to console
                      //^  ^
                      //^  Defines the value of "y" in this function
                      //^
                      //Defines the value of "x" in this function

//This is a function that runs an "if else" statement when called//

function fun1(i){ //Initializes variable "i" locally
	if (i <= 20){ //If the value of "i" is less than or equal to "20,
		return true;        //return "true"
	} else {		       //anything else,
		return false;       //return "false"
	};
};
console.log(fun1(20));//Defines value of "i" 
console.log(fun1(23));	

//You can store a function inside of a variable//
var x = function(){
	switch (new Date().getDay()){ //Uses a variable declared as a function to call a switch statement
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
	};
};
console.log("Today is " + x());//You can call the variable as a function

//Here is the same function using "else if" statements instead of a switch statement//
var y = function (){
	var day = new Date().getDay();//Variables can be declared locally inside the curly braces of a function
	if (day = 0){
		return "Monday";
	} else if (day = 1){
		return "Tuesday";
	} else if (day = 2){
		return "Wednesday";
	} else if (day = 3){
		return "Thursday";
	} else if (day = 4){
		return "Friday";
	} else if (day = 5){
		return "Saturday";
	} else if (day = 6){
		return "Sunday";
	};
};
console.log("Today is " + y());

//Functions can be used as a value for a variable//
function fun2(){
	return "Hello World";
};

var x = fun2();

console.log(x);

//Self-Calling functions//

(function (){                       //Declare a function, it does not have to have a name, and wrap it in parenthesis
	var day = new Date().getDay();  //It will look like this >> "(function () {})();"
	if (day < 5 ){
		console.log("Today is a weekday.");
	} else {
		console.log("It's the weekend.")
	}
})();
//^^ This function calls itself in the console

//A better example
(function () {console.log("This function runs itself")})();
















