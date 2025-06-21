function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // execute the callback after taskTwo finishes
}

// Call taskTwo and pass taskOne as a callback
taskTwo(taskOne);
