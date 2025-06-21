const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    if (typeof title !== "string" || typeof author !== "string" || typeof year !== "number") {
        // console.error("Invalid book details. Please provide a valid title, author, and year.");
      return;
    }

    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Book "${removed.title}" removed.`);
    } else {
      console.log("Book not found.");
    }
  }
};

// Test Cases
library.addBook({ author: "George Orwell", year: 1949 }); // Missing title → error
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Valid → added
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }); // Valid → added
console.log(library.findBookByTitle("1984")); // Output: { title: '1984', author: 'George Orwell', year: 1949 }

console.log(`Total books: ${library.books.length}`); // Output: Total books: 2
