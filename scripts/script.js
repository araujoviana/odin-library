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
});

displayEachBook(bookshelf);