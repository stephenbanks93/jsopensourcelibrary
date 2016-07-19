//Conditional statement//

//If statements//

var x = 10;

if (x > 10){
	console.log("true");//This will not return anything because x is 
};						//"equal" to 10 and is not greater than 10


if (x >= 10){
	console.log("true");//Returns the entered string because x equals 10
};						//and is therfore true

//Else statements//

var y = 21;
       
if (y >= 20){
	console.log("true");//If "y" is greater than or equal to "20", will return "true"
} else {
	console.log("false");//If the condition is not met, will return "false"
};

if (y - x == 11){
	console.log("true");//Will return "true" if the difference between "y" & "x" is equal to "9" 
} else {
	console.log("false");//Will return "false" if difference is not "9"
};

var t = 3;

if (!(t == 4)){
	console.log("true");//If it is true that "t" does not equal "4", will return "true"
} else {
	console.log("false");//If "t" is equal to "4", will return "false"
};

//Else if stetements//

var time = new Date().getHours();//Gets time in 24 hour format from your computer

if (time < 12){
	console.log("Good Morning");//If your current time is less than 12pm, returns "Good Morning"
} else if(time < 19){
	console.log("Good Day");//If your current time is less than 7pm, returns "Good Day"
} else {
	console.log("Good Evening");//If your current time does not meet the above conditions, 
};                              //returns "Good Evening".

//Switch statements//
var month;

switch (new Date().getMonth()){//Obtains your current month as a number between 0 & 11 then
	case 0:                    //assigns a case that matches that number
		month = "January";
		break; //When the switch runs and it gets to a matching case that contains a "break",  
	case 1:    //execution of more code or case testing is halted.
		month = "Febuary";
		break;
	case 2:
		month = "March";
		break;
	case 3:
		month = "April";
		break;
	case 4:
		month = "May";
		break;
	case 5:
		month = "June";
		break;
	case 6:
		month = "July";
		break;
	case 7:
		month = "August";
		break;
	case 8:
		month = "September";
		break;
	case 9:
		month = "October";
		break;
	case 10:
		month = "November";
		break;
	case 11:
		month = "December";
};
console.log("This Month is " + month);

//Switch with the "default" keyword

var day;

switch (new Date().getDay()){       //Obtains day as a number between "0" & "6", "0" being Sunday
                                    //and "6" being Saturday
	                          
	case 1:                         //Case 1 is Monday, so on Monday, "day" equals "Reset is tomorrow"
		day = "Reset is tomorrow";
		break;
	case 2: 						//case 2 is Tuesday, so on Tuesday, "day" equals "Weekly Reset"
		day = "Weekly Reset";
		break;
	default: 						//In the "default" case, on any other day, "day" equals "Reset is Tuesday"
		day = "Reset is Tuesday";	
};
console.log(day);

//Common Code, or Fall-Through switches

switch (new Date().getMonth()){
	case 11:
	case 0:
	case 1:
		month = "It's Winter";
		break;
	case 2:
	case 3:
	case 4:
		month = "It's Spring";
		break;
	case 5:
	case 6:
	case 7:
		month = "It's Summer";
		break;
	case 8:
	case 9:
	case 10:
		month = "It's Fall(Autumn)";
};
console.log(month);
