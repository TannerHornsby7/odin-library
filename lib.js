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


// add book to library function

function addBookToLibrary() {

    //form values
    const inTitle = document.getElementById('title').value;
    const inAuthor = document.getElementById('author').value;
    const inPages = document.getElementById('pages').value;

    const book = new Book(inTitle, inAuthor, inPages, read, i);

    let backcover = document.createElement('div');
    let frontcover = document.createElement('div');
    let bot = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    let pages = document.createElement('h4');

    backcover.classList.add("backofbook");
    frontcover.classList.add("bookcover");
    bot.classList.add("bot");

    console.log(book.title)
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if(book.read) {
        backcover.classList.add("backread");
        frontcover.classList.add("read");
    }

    frontcover.appendChild(title);
    bot.appendChild(author);
    bot.appendChild(pages);
    frontcover.appendChild(bot);
    backcover.appendChild(frontcover);
    library.appendChild(backcover);

    //appending object to array
    myLibrary.push(book)
    i++;
}

//getting form submissions
const addlib = document.getElementById('addlib');

//adding form specified book to library
addlib.addEventListener('click', () => addBookToLibrary());


//remove book logic

//toggle read status logic

