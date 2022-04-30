//array to store book objects
let library = [];

//the Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//selecting the grid element to dinamically append and remove child elements
const bookGrid = document.querySelector("#books");

//close the form when clicked on the form background
document.querySelector(".formBkg").addEventListener('click', () => {
    document.querySelector("#form").style.display = "none";
    document.querySelector(".formBkg").style.display = "none";
});

//makes input field visible when called by clicking on "Add Book" button
function popupForm() {
    document.querySelector(".formBkg").style.display = "block";
    document.querySelector("#form").style.display = "flex";
};

//creates a book card element and appends it to book grid
function createBookCard(newBook, indexOfBook) {

    const bookCard = document.createElement('div');
    //store index value of the current book object passed from the scope of addNewBook()
    bookCard.setAttribute("index", `${indexOfBook}`);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = newBook.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = newBook.author;
    const bookPages = document.createElement('p');
    bookPages.textContent = newBook.pages;
    const readBtn = document.createElement('button');
    readBtn.textContent = newBook.read;
    readBtn.addEventListener('click', (e) => toggleRead(e, readBtn));
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", function () {
        library.splice(Number(bookCard[indexOfBook]), 1);
        console.log(library);
        removeBtn.parentElement.remove();
    });

    //append elements to the book card
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);

    //append the book card element into the grid element
    bookGrid.appendChild(bookCard)
};

function toggleRead(e, readBtn) {
    const getIndex = Number(e.target.parentElement.getAttribute('index'))
    if (library[getIndex].read == "read") {
        readBtn.textContent = "not read";
        readBtn.style.backgroundColor = "red";
        library[getIndex].read = "not read";
    } else {
        readBtn.textContent = "read";
        readBtn.style.backgroundColor = "#fde68a";
        library[getIndex].read = "read"
    }
};

//clears the input fields after a new book is added
function clearInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pages").value = "";
};

function addNewBook() {
    document.querySelector("#form").style.display = "none";
    document.querySelector(".formBkg").style.display = "none";

    //get values from the input fiels
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    //create a new book object based on input values
    const newBook = new Book(title, author, pages, read);

    //push the new element into the library array and store the index
    const indexOfBook = library.push(newBook) - 1;

    //create and append a book element based on the new book object and index value of it
    createBookCard(newBook, indexOfBook);

    clearInput()
};

// listener for esc key to close the poppup
document.addEventListener('keydown', event => {
    if (event.key == 'Escape') {
        document.querySelector("#form").style.display = "none";
        document.querySelector(".formBkg").style.display = "none";
    }
});