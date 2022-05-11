let library = {};

class Book {
    constructor() {
        this.title = document.getElementById("title").value;
        this.author = document.getElementById("author").value;
        this.pages = document.getElementById("pages").value;
        this.read = document.getElementById("read").checked
    }

    removeBook(removeBtn) {
        delete this;
        removeBtn.parentElement.remove()
    }

    toggleRead(readBtn) {

        if (this.read) {
            readBtn.textContent = "not read";
            readBtn.style.backgroundColor = "lightcoral";
            this.read = false
        } else {
            readBtn.textContent = "read";
            readBtn.style.backgroundColor = "#fde68a";
            this.read = true
        }
    }

    //creates a book card element and appends it to book grid
    appendBook() {
        const index = Object.keys(library).length - 1;

        const bookCard = document.createElement('div');
        bookCard.setAttribute("index", `${index}`);

        const bookTitle = document.createElement('p');
        bookTitle.textContent = this.title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = this.author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = this.pages;
        bookCard.appendChild(bookPages);

        const readBtn = document.createElement('button');
        readBtn.textContent = this.read ? 'read' : 'not read';
        readBtn.style.backgroundColor = this.read ? "#fde68a" : "lightcoral";

        readBtn.addEventListener('click', () => this.toggleRead(readBtn));
        bookCard.appendChild(readBtn);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "remove";
        removeBtn.addEventListener("click", () => this.removeBook(removeBtn));
        bookCard.appendChild(removeBtn);

        const bookGrid = document.querySelector("#books");
        bookGrid.appendChild(bookCard)
    }
};

//makes input field visible when called by clicking on "Add Book" button
function openForm() {
    document.querySelector(".formBkg").style.display = "block";
    document.querySelector("#form").style.display = "flex"
};

function closeForm() {
    document.querySelector(".formBkg").style.display = "none";
    document.querySelector("#form").style.display = "none"
};

// listener for esc key to close the input field
document.addEventListener('keydown', event => {
    if (event.key == 'Escape') closeForm()
});

//close the form when clicked on the form background
document.querySelector(".formBkg").addEventListener('click', closeForm);

//clears the input fields after a new book is added
function clearInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = ""
};

function addNewBook() {
    const newBook = new Book();
    //push the new book object into the library object
    library[Object.keys(library).length] = newBook;
    //append book element based on the properties
    newBook.appendBook();
    closeForm();
    clearInput()
}