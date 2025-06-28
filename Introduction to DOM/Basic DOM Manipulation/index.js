// Select the <ul> using querySelector
const ul = document.querySelector("#item-list");
const button = document.getElementById("add-button");

// Event listener for the button
button.addEventListener("click", () => {
  // Create a new <li> element
  const newItem = document.createElement("li");

  // Determine the sequence number
  const count = ul.children.length + 1;

  // Set the text
  newItem.textContent = `Item ${count}`;

  // Apply styles based on odd/even
  if (count % 2 === 1) {
    newItem.classList.add("odd");
  } else {
    newItem.classList.add("even");
  }

  // Append the new item to the list
  ul.appendChild(newItem);
});
