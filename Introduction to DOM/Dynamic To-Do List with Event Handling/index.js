// Selecting DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Event listener for adding tasks
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task before adding.");
    return; // Prevent adding empty task
  }

  // Create <li> element
  const li = document.createElement("li");

  // Create task span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginLeft = "10px";
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append elements
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
