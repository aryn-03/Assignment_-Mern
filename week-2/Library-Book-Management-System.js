/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:
      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }
  borrow() {
    this.isAvailable = false;
  }
  returnBook() {
    this.isAvailable = true;
  }
  getInfo() {
    return this.title + " by " + this.author + " (" + this.pages + " pages)";
  }
  isLongBook() {
    return this.pages > 300;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("Atomic Habits", "James Clear", 280);
const book5 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 336);


const library = [book1, book2, book3, book4, book5];

// i. Display info of all books
console.log("All Books:");
for (let i = 0; i < library.length; i++) {
  console.log(library[i].getInfo());
}

// ii. Borrow 2 books and show availability
book1.borrow();
book3.borrow();

console.log("\nAvailability after borrowing two books:");
for (let i = 0; i < library.length; i++) {
  console.log(library[i].title + ": " + library[i].isAvailable);
}

// iii. Return 1 book and show updated status
book1.returnBook();

console.log("\nAvailability after returning one book:");
console.log(book1.title + ": " + book1.isAvailable);

// iv. Count long books (> 300 pages)
let longBookCount = 0;
for (let i = 0; i < library.length; i++) {
  if (library[i].isLongBook()) {
    longBookCount++;
  }
}

console.log("\nNumber of long books: " + longBookCount);

// v. List all available books
console.log("\nAvailable Books:");
for (let i = 0; i < library.length; i++) {
  if (library[i].isAvailable) {
    console.log(library[i].title);
  }
}
