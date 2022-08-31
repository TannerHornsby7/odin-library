let myLibrary = [];
const library = document.getElementById('library');
let read = false;
let i = 0;

// Book object constructor
function Book(title, author, pages, read, data) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = data;
    this.info = function () {
        return title + ", " + author + ", " + pages + ", " + read;
    };
}

// read button click manager
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


// add book to object library function
function addBookToObjLibrary() {

    //form values
    const inTitle = document.getElementById('title').value;
    const inAuthor = document.getElementById('author').value;
    const inPages = document.getElementById('pages').value;

    const book = new Book(inTitle, inAuthor, inPages, read, i);

    //appending object to array
    myLibrary.push(book);
    i++;

}

// add book to display library function

function DisplayBook(book) {

    let backcover = document.createElement('div');
    let frontcover = document.createElement('div');
    let bot = document.createElement('div');
    let top = document.createElement('div');
    let title = document.createElement('h2');
    let trash = document.createElement('ion-icon');
    let author = document.createElement('h3');
    let pages = document.createElement('h4');

    backcover.classList.add("backofbook");
    backcover.dataset.index = i;
    frontcover.classList.add("bookcover");
    bot.classList.add("bot");
    trash.classList.add("icon")
    top.classList.add("top")

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if(book.read) {
        backcover.classList.add("backread");
        frontcover.classList.add("read");
    }

    trash.setAttribute("name", "trash-outline");
    trash.style.fontSize = "16px";

    if(read) {
        trash.style.color = "darkgreen";
    } else {
        trash.style.color = "darkred";
    }

    top.appendChild(trash);
    frontcover.appendChild(top);
    frontcover.appendChild(title);
    bot.appendChild(author);
    bot.appendChild(pages);
    frontcover.appendChild(bot);
    backcover.appendChild(frontcover);
    library.appendChild(backcover);
}

function DisplayBooks () {
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }
    for(let i = 0; i < myLibrary.length; i++) {
        DisplayBook(myLibrary[i]);
    }
}

//getting form submissions
const addlib = document.getElementById('addlib');

//adding form specified book to library
addlib.addEventListener('click', () => {
    addBookToObjLibrary();
    DisplayBooks();
});


//remove book logic


//toggle read status logic

