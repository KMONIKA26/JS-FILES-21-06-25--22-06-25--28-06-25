// Select the <h1> element by its id and change its text content
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// Select all <p> elements and set their text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// Use querySelector to select the first <div> with class 'container' and change its background color
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
