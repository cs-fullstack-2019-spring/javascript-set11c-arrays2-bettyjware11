//Create an array with 5 numbers. Ask the user for the length of the array you want to print.
//Alert the user of the array from 0 to their input.

// KEY: Should prompt user and loop through items starting with index 0 up to index number entered
var numbers = ['25', '30', '35', '40', '50'];
var endIdx = parseInt(prompt("Enter ending index: "));

for (var i = 0; i < endIdx; i++) {
    console.log(numbers[i]);
}

