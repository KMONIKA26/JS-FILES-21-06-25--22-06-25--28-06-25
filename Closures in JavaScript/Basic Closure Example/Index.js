function outerFunction() {
    let message = "Hello from the outer function!";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

// Demonstrate closure
const closureFunc = outerFunction(); // outerFunction is invoked, innerFunction is returned and stored

closureFunc(); // Logs: "Hello from the outer function!"
