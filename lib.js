let myLibrary = [];

function Book(title, author, pages, read) {
    this.title;
    this.author;
    this.pages;
    this.read;
    this.info = function () {
        return title + ", " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const catInHat = new Book("The Cat in the Hat", "Dr. Seuss", 45, false);
const theTwits = new Book("The Twits", "Roald Dahl", 60, true);

addBookToLibrary(catInHat);
addBookToLibrary(theTwits);



function printBooks() {
    let output = "";
    for (let i = 0; i < myLibrary.length; i++) {
        output += "Book #" + (i + 1) + " is: " + myLibrary[i].info() + '\n';
    }
    return output;
}


console.log(printBooks());