function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Original object
const original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

// Cloning the object
const clone = deepClone(original);

// Modifying the cloned object
clone.hobbies.push("coding");

// Logging both to verify independence
console.log("Original:", original); // { name: "Alice", hobbies: ["reading", "traveling"] }
console.log("Clone:", clone);       // { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
