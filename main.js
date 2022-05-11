//array to store book objects
let library = {};

//the Book constructor
class Book {
    constructor() {
        this.title = document.getElementById("title").value;
        this.author = document.getElementById("author").value;
        this.pages = document.getElementById("pages").value;
        this.read = document.getElementById("read").value
    }
};

//selecting the grid element to dinamically append and remove child elements
const bookGrid = document.querySelector("#books");

function closeForm() {
    document.querySelector("#form").style.display = "none";
    document.querySelector(".formBkg").style.display = "none";
};

//makes input field visible when called by clicking on "Add Book" button
function openForm() {
    document.querySelector(".formBkg").style.display = "block";
    document.querySelector("#form").style.display = "flex";
};

//close the form when clicked on the form background
document.querySelector(".formBkg").addEventListener('click', () => closeForm());

//clears the input fields after a new book is added
function clearInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pages").value = "";
};

//creates a book card element and appends it to book grid
function createBookCard(newBook, indexOfBook) {

    const bookCard = document.createElement('div');
    bookCard.setAttribute("index", `${indexOfBook}`);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = newBook.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = newBook.author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = newBook.pages;
    bookCard.appendChild(bookPages);

    const readBtn = document.createElement('button');
    readBtn.textContent = newBook.read;
    readBtn.addEventListener('click', () => toggleRead(readBtn, indexOfBook));
    bookCard.appendChild(readBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", () => removeBook(removeBtn, indexOfBook));
    bookCard.appendChild(removeBtn);

    bookGrid.appendChild(bookCard)
};

function removeBook(removeBtn, indexOfBook) {
    delete library[indexOfBook];
    removeBtn.parentElement.remove();
    console.log(library)
};

function toggleRead(readBtn, indexOfBook) {
    //const getIndex = Number(readBtn.parentElement.getAttribute('index'))
    if (library[indexOfBook].read == "read") {
        readBtn.textContent = "not read";
        readBtn.style.backgroundColor = "red";
        library[indexOfBook].read = "not read";
    } else {
        readBtn.textContent = "read";
        readBtn.style.backgroundColor = "#fde68a";
        library[indexOfBook].read = "read"
    }
};

function addNewBook() {

    closeForm()

    const newBook = new Book();

    //push the new object into the library object and get the index
    library[Object.keys(library).length] = newBook;
    const indexOfBook = Object.keys(library).length - 1;

    //create and append a book element based on the new book object and index
    createBookCard(newBook, indexOfBook);

    clearInput()
};

// listener for esc key to close the poppup
document.addEventListener('keydown', event => {
    if (event.key == 'Escape') closeForm()
});


