// Global Execution Context
let age = 25;  // Global variable

// Function to display the current value of age
function displayAge() {
  console.log("Age (in displayAge):", age);
}

// Function to change the value of age
function changeAge() {
  age = 30; // Updating the global variable
  console.log("Age updated (in changeAge):", age);
}

// Calling functions
displayAge();  // Should print: Age (in displayAge): 25
changeAge();   // Should print: Age updated (in changeAge): 30
displayAge();  // Should now print: Age (in displayAge): 30
