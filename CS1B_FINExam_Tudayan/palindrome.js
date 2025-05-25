/*
Name: Manuel Federico Tudayan
Year & Sectiom: BSCS 1B
Coding Problem 1: String Array Operations - Palindrome
Activity No: Exam Fin
*/

// Prompt user for input
let firstWord = prompt("Enter the first word (ex. RACECAR): ");
let secondWord = prompt("Enter the second word (ex. RECORDER): ");

// Reverse the input strings
let reverseWord1 = firstWord.split("").reverse().join("");
let reverseWord2 = secondWord.split("").reverse().join("");

// Log original and reversed strings
console.log(`Word 1: ${firstWord}`);
console.log(`Reversed Word 1: ${reverseWord1}`);
console.log(`Word 2: ${secondWord}`);
console.log(`Reversed Word 2: ${reverseWord2}`);

// Check if the input strings are palindromes
if (firstWord === reverseWord1) {
  console.log("First word is a palindrome.");
} else {
  console.log("First word is not a palindrome.");
}
if (secondWord === reverseWord2) {
  console.log("Second word is a palindrome.");
} else {
  console.log("Second word is not a palindrome.");
}
