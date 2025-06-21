function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Define a person object
const person = {
  name: "Alice",
  age: 25
};

// Call personInfo using call() to set the context to `person`
personInfo.call(person);
