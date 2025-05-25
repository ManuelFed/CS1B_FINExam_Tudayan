/*
Name: Manuel Federico Tudayan
Year & Section: BSCS 1B
Coding Problem 2: Single Dimensional Array Operations – Array Sorting
Activity No: Exam Fin
*/

// Prompt user for input and split the input into array elements
let stringNumbers = prompt(
  "Enter numbers separated by commas (ex. 24,65,21,5,9,32,42,80,57):"
);
let stringNames = prompt(
  "Enter names separated by commas (ex. Zenvo,Erica,Jordie,Alicia,Redon):"
);

// Convert input strings to arrays
let numbers = stringNumbers.split(",").map(function (num) {
  return parseInt(num); // Convert string to integer
});

let names = stringNames.split(",").map(function (name) {
  return name.trim(); // Remove extra spaces
});

// Merge arrays into one single array
let mergedArray = numbers.concat(names);
console.log(`Merged Array: \n${mergedArray}`);

// Sort numbers in descending order (numerically)
let sortedNumbers = numbers.slice().sort(function (a, b) {
  return b - a;
});
console.log(`Numbers Sorted in Reverse (Descending): \n${sortedNumbers}`);

// Sort names alphabetically (A to Z)
let sortedNames = names.slice().sort(); // Default sort for strings
console.log(`Names Sorted (Alphabetically): \n${sortedNames}`);
