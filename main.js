//array to store book objects
let library = [];
//selecting the grid element to dinamically append and remove child elements
const bookGrid = document.querySelector("#books");
//event listener for the form background
document.querySelector(".formBkg").addEventListener('click', () => {
    document.querySelector("#form").style.display = "none";
    document.querySelector(".formBkg").style.display = "none";
});
//makes input field visible when called
function popupForm() {
    document.querySelector(".formBkg").style.display = "block";
    document.querySelector("#form").style.display = "flex";
};
//the Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
//creates a book card element and appends it to book grid
function createBookCard(newBook, indexOf) {
    //creating elements of the book card on the DOM
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    bookTitle.textContent = newBook.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = newBook.author;
    const bookPages = document.createElement('p');
    bookPages.textContent = newBook.pages;
    const readBtn = document.createElement('button');
    readBtn.textContent = newBook.read;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
        library.splice(Number(bookCard[indexOf]), 1);
        console.log(library);
        removeBtn.parentElement.remove();
    });
    //store index value of the current book object
    //passed from scope of the addBook() function call
    bookCard.setAttribute("indexOf", `${indexOf}`)
    //append elements to the book card
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    //append the book card element into the grid element
    bookGrid.appendChild(bookCard)

};

function toggleRead() {
    if (library[Number(this[indexOf])].read == "read") {
        toggleRead.textContent = "not read";
        toggleRead.style.backgroundColor = "red"
    } else {
        toggleRead.textContent = "read";
        toggleRead.style.backgroundColor = "#fde68a"
    }
}

function clearInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pages").value = "";
};

function addBook() {
    document.querySelector("#form").style.display = "none";
    document.querySelector(".formBkg").style.display = "none";
    //get values from the input fiels
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("pages").value;
    //create an instance of Book based on input values
    const newBook = new Book(title, author, pages, read);
    //push method pushes the new element into the library array and
    //returns the length of that array
    const indexOfBook = library.push(newBook) - 1;
    //a new book element being created based on property values of
    //the new Book object and the index of this object in the array
    createBookCard(newBook, indexOfBook);
    //clears the input fields after a new book is added
    clearInput()
};

// Test the key and code properties
document.addEventListener('keydown', event => {
    if (event.key == 'Escape') {
        document.querySelector("#form").style.display = "none";
        document.querySelector(".formBkg").style.display = "none";
    }
});