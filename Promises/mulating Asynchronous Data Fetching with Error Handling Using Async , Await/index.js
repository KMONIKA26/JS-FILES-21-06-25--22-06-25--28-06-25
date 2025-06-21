// Function to simulate data fetching with a 50% chance of success
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;  // Random number between 0 and 1
      if (success) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error occurred");
      }
    }, 1000); // Simulate 1 second delay
  });
}

// Async function to handle the fetchData function
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Run the handler function
fetchDataHandler();
