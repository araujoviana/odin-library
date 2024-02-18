// TODO: Add a button for deleting book entries
// TODO: Add a button for toggling its read status


const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");
const newBookButton = document.querySelector(".new-book");
const bookForm = document.querySelector(".book-form");
const newBookEntry = document.querySelector("#submit");
const bookArray = [];

function Book(title, author, pages, releaseYear, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.releaseYear = releaseYear;
  this.read = read;
}

function addBookToLibrary() {
    let userBook = new Book(
        bookForm.querySelector("#title").value,
        bookForm.querySelector("#author").value,
        bookForm.querySelector("#pages").value,
        bookForm.querySelector("#release-year").value,
        bookForm.querySelector("#read").value
    );
    bookArray.push(userBook);
}

function displayEachBook() {
    for (const book of bookArray) {
        // TODO: display books in DOM
    }
}

newBookButton.addEventListener('click', () => {
    if (bookForm.style.display == 'none') {
        bookForm.style.display = 'block'; // Maybe change this
    }
    else {
        bookForm.style.display = 'none';
    }
    
});

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
})

newBookEntry.addEventListener('click', () => {
    addBookToLibrary();
});

// Dummy data
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 300, 1925);
bookArray.push(book1);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 350, 1960, true);
bookArray.push(book2);
let book3 = new Book("1984", "George Orwell", 400, 1949);
bookArray.push(book3);
let book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 240, 1951, true);
bookArray.push(book4);
let book5 = new Book("Pride and Prejudice", "Jane Austen", 320, 1813);
bookArray.push(book5);

displayEachBook(bookshelf);