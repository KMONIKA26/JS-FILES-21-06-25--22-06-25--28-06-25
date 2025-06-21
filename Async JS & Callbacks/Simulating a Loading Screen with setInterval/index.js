let count = 0;

let loadingInterval = setInterval(function () {
    console.log("Loading...");
    count++;

    if (count === 5) {
        clearInterval(loadingInterval);
        console.log("Loaded successfully!");
    }
}, 1000); // Runs every 1000 milliseconds (1 second)
