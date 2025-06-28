// Get DOM elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgBtn = document.getElementById("change-bg-btn");
const updateTextBtn = document.getElementById("update-text-btn");
const outputDiv = document.getElementById("output-div");

// Function to validate color name using temporary DOM element
function isValidColor(color) {
  const test = document.createElement("div");
  test.style.color = color;
  return test.style.color !== "";
}

// Event listener for background color change
changeBgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();

  if (isValidColor(color)) {
    outputDiv.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});

// Event listener for text update
updateTextBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (text === "") {
    alert("Please enter some text!");
  } else {
    outputDiv.textContent = text;
  }
});
