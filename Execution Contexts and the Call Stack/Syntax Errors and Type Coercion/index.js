const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Convert string price to number if possible
    const price = parseFloat(item.price);

    if (isNaN(price)) {
      console.log(`Invalid price for item: ${item.name}`);
      return;
    }

    item.price = price; // ensure price is stored as a number
    this.items.push(item);
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // now accepted after parseFloat
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // ✅ "Total: $103.45"
