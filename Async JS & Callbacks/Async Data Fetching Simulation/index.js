function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log("User data received");
    callback();
  }, 1000); // 1 second delay
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    console.log("User posts received");
    callback();
  }, 1500); // 1.5 second delay
}

// Start the nested callback flow
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
