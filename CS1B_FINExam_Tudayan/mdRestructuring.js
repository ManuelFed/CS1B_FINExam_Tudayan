/*
Name: Manuel Federico Tudayan
Year & Section: BSCS 1B
Coding Problem 3: Multi-Dimensional Array - Array Restructuring
Activity No: Exam Fin
*/

// Prompt for names and ages input
let names = prompt(
  "Enter 5 names separated by commas (ex. Genevieve,Juan,Luna,Gabriel,Elise):"
);
let ages = prompt(
  "Enter 5 corresponding ages separated by commas (ex. 24,65,21,5,9):"
);

// Convert input strings to arrays
let subArray1 = names.split(",").map(function (name) {
  return name.trim(); // Remove extra spaces
});

let subArray2 = ages.split(",").map(function (age) {
  return parseInt(age); // Convert to number
});

// Restructure into a new multi-dimensional array: [name, age]
let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

// Dsiplay each [name, age] pair per line
console.log("Restructured Multi-Dimensional Array: ");
for (let i = 0; i < restructuredArray.length; i++) {
  console.log(restructuredArray[i]);
}
