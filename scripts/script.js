// TODO: Add a button for deleting book entries
// TODO: Add a button for toggling its read status


const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");
const newBookButton = document.querySelector(".new-book");

function Book(title, author, pages, releaseYear, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.releaseYear = releaseYear;
  this.read = read;
}

function addBookToLibrary() {
  // TODO: Adds books to the library
}

function displayEachBook(bookArray) {
    for (const book of bookArray) {
        // TODO: display books in DOM
    }
}

newBookButton.addEventListener('click', () => {
    // TODO: add form for inserting new books
    const bookForm = document.querySelector(".book-form");
    if (bookForm.style.display == 'none') {
        bookForm.style.display = 'block'; // Maybe change this
    }
    else {
        bookForm.style.display = 'none';
    }
    
});

// Dummy data
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 300, 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 350, 1960, true);
let book3 = new Book("1984", "George Orwell", 400, 1949);
let book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 240, 1951, true);
let book5 = new Book("Pride and Prejudice", "Jane Austen", 320, 1813);

displayEachBook(bookshelf);