//Ask the user to enter a word to add to an array. Add the user input into the array.
//If the user enters a 'q', stop asking them to enter a word.

// KEY: Need to use a loop to keep prompting for input
var myArray = new Array('1', '2');
//myArray.push('3'); // myArray is now ["1", "2", "3"]

do {
	var addWord =prompt("Enter word");
	if (addWord === "q")
	{
		break; // Stop asking
	}
	myArray.push(addWord); // Add entered word to array
} while(true);

