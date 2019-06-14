//PART1

// you solution should be here
var birthYear = 1995;
var futureYear=2019;
// Age after bithday
var olderAge = futureYear-birthYear;
console.log("Age after birthday is " + olderAge);
// Age before bithday
var youngerAge = olderAge-1;
console.log("Age before birthday is " + youngerAge);

//PART2
	
// Calculating number of years to live
	var currentAge = 24;
	var maxAge = 120;
	var numYears= maxAge-currentAge;
	
	console.log("I have about "+numYears+" years to live");

// Calculating number of days to live
	var daysInYear=365.25;
	console.log("There are "+daysInYear+" days in a year");

	var numOfDays = daysInYear*numYears;
	console.log("Which means I have "+numOfDays+" days to live");

//Calculating total number of apples needed
	var applesPerDay = 2;
	console.log("I need "+applesPerDay+" apples per day");

	var totalApples=applesPerDay*numOfDays;
	console.log("Which means I need "+totalApples+" apples");
