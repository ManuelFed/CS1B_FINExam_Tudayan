/*
Name: Manuel Federico Tudayan
Year & Section: BSCS 1B
Coding Problem 4: Grocery Items with Stacks 
Activity No: Exam Fin
*/

// Initialize an empty grocery stack (array)
let groceryStack = [];

// Checks if stack is empty and returns top item
function peek() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty.");
    return null;
  } else {
    console.log(`Top item is: ${groceryStack[groceryStack.length - 1]}`);
    return groceryStack[groceryStack.length - 1];
  }
}

// Adds pushed item to the top (end) of the stack
function push(item) {
  groceryStack.push(item);
  console.log(`\nItem pushed: ${item}`);
  peek(); // Check the top item
  console.log(`Updated Stack: ${groceryStack}`);
}

// Removes the last added item from the stack
function pop() {
  if (groceryStack.length === 0) {
    console.log("Nothing to pop, stack is empty.");
    return;
  }
  let removedItem = groceryStack.pop();
  console.log(`\nItem popped:  ${removedItem}`);
  peek(); // Check the new top item
  console.log(`Updated Stack: ${groceryStack}`);
}

// Ask the user to input 5 grocery items
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item #${i + 1}:`);
  push(item); // Push each item to the stack
}

// Example of removing the last item from the stack
pop(); // showing pop operation
