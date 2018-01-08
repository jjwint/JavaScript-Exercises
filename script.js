//Exercise 1
var num = prompt("Enter a number.");
var total = 0;

for (var i=0; i<=num; i++) {
	total = total + i;
}

console.log(total);

//Exercise 2	
var play = prompt("Do you want to play?");
var wordString = "";

if(play === "no"){
	console.log("You didn't want to play.");
} else if (play === "yes") {
	do {
		var word = prompt("Enter a word.");
		var playAgain = prompt("Would you like to play again?");
		wordString = wordString + " " + word;
	} while (playAgain === "yes")
	if(playAgain === "no") {
		console.log(wordString);
	} 
}

//Exercise 3
var printName = prompt("Would you like to print your name?");

var yourName = "Your name is ";

if (printName === "yes") {
	var name = prompt("What is your name?");
	console.log(yourName + name);
} else {
	console.log("Maybe next time.");
}

var printAgain = prompt("Would you like to print this again?");

var exPoint = "!";

var message = yourName + name;

while (printAgain === "yes") {
	message = message + exPoint;
	console.log(message);
	printAgain = prompt("Would you like to print this again?");
}


//Exercise 4
var timeOfDay = prompt("Is it morning, noon, or evening?");

if (timeOfDay === "morning") {
	console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeOfDay === "noon") {
	console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (timeOfDay === "evening") {
	console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
} else {
	console.log("I'm sorry, that is not a valid response. Please try again.");
}