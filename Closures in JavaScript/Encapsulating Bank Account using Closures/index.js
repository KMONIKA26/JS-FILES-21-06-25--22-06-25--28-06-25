function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            } else {
                return "Deposit amount must be positive.";
            }
        },
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds.";
            } else if (amount <= 0) {
                return "Withdrawal amount must be positive.";
            } else {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

// Example usage:
const account = createBankAccount(100);

console.log(account.deposit(50));    // Output: 150
console.log(account.withdraw(30));   // Output: 120
console.log(account.getBalance());   // Output: 120
console.log(account.withdraw(200));  // Output: "Insufficient funds."
console.log(account.withdraw(-10));  // Output: "Withdrawal amount must be positive."
