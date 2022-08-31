// Globals
let myLibrary = [];                                 // Book array
const library = document.getElementById('library'); // Library Grid
let i = 0;                                          

// Pop up manager
function openTheForm() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("openBtndiv").style.display = "none";
  }
  
function closeTheForm() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("openBtndiv").style.display = "block";

}
window.onclick = function (event) {
    let modal = document.getElementById('popup');
    if (event.target == modal) {
      closeTheForm();
    }
  }


// Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggleRead = function () {
        this.read = !this.read;
    }
    this.info = function () {
        return title + ", " + author + ", " + pages + ", " + read;
    };
}

// Read button click manager
let read = false;                                        // Form Read Status
const readyornot = document.getElementById('readyornot');

readyornot.addEventListener('click', () => {
    read = !read;
    if(read) {
        readyornot.classList.add('read');
        readyornot.textContent = "Read";
    }
    else {
        readyornot.classList.remove('read');
        readyornot.textContent = "Not Read";
    }
});


// Add book to object library function
function addBookToObjLibrary() {

    //form values
    const inTitle = document.getElementById('title').value;
    const inAuthor = document.getElementById('author').value;
    const inPages = document.getElementById('pages').value;

    const book = new Book(inTitle, inAuthor, inPages, read);

    myLibrary.push(book);
}

// Add book to display library function
function displayBook(book) {

    let backcover = document.createElement('div');
    let frontcover = document.createElement('div');
    let bot = document.createElement('div');
    let top = document.createElement('div');
    let title = document.createElement('h2');
    let trash = document.createElement('ion-icon');
    let author = document.createElement('h3');
    let pages = document.createElement('h4');

    backcover.classList.add("backofbook");
    trash.dataset.index = myLibrary.indexOf(book);
    frontcover.classList.add("bookcover");
    bot.classList.add("bot");
    trash.classList.add("icon")
    top.classList.add("top")

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    backcover.addEventListener('click', () => {
        book.toggleRead();
        displayBooks();
    });

    if(book.read) {
        backcover.classList.add("backread");
        frontcover.classList.add("read");
        trash.style.color = "darkgreen";
    } else {
        trash.style.color = "darkred";
    }

    trash.setAttribute("name", "trash-outline");
    trash.style.fontSize = "32px";

    trash.addEventListener('click', () => {
        console.log(trash.dataset.index);
        myLibrary.splice(trash.dataset.index, 1);
        console.table(myLibrary);
        displayBooks();
    });

    backcover.title = "Click To Toggle Read Status";

    top.appendChild(trash);
    frontcover.appendChild(top);
    frontcover.appendChild(title);
    bot.appendChild(author);
    bot.appendChild(pages);
    frontcover.appendChild(bot);
    backcover.appendChild(frontcover);
    library.appendChild(backcover);
}

// Render books from object library
function displayBooks () {
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }
    for(let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}

// Button to submit book to library
const addlib = document.getElementById('addlib');

addlib.addEventListener('click', () => {
    addBookToObjLibrary();
    displayBooks();
});
