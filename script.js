//Exercise 1
var num = prompt("Enter a number.");
var total = 0;

for (var i=0; i<=num; i++) {
	total = total + i;
}

console.log(total);

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