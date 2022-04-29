let library = [];

const books = document.querySelector("#books");

function popupForm() {
    document.querySelector("#form").style.display = "flex";
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function createBookElem(newBook, indexOf) {

    const div = document.createElement('div');

    const title = document.createElement('p');
    title.textContent = newBook.title;
    div.appendChild(title);

    const author = document.createElement('p');
    author.textContent = newBook.author;
    div.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = newBook.pages;
    div.appendChild(pages);

    const toggleRead = document.createElement('button');
    div.appendChild(toggleRead);

    const remove = document.createElement('button');
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
        library.splice(Number(div[indexOf]),1);
        console.log(library);
        remove.parentElement.remove();
    });
    div.appendChild(remove);

    div.setAttribute("indexOf", `${indexOf}`)

    books.appendChild(div)

};

function toggleRead () {
    if (library[Number(this[indexOf])].read == "read") {
        toggleRead.textContent = "not read";
        toggleRead.style.backgroundColor = "red"

    } else {
        toggleRead.textContent = "read";
        toggleRead.style.backgroundColor = "#fde68a"
    }
}

function clearInput () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pages").value = "";
};

function addBook() {
    document.querySelector("#form").style.display = "none";

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages, read);

    const indexOfBook = library.push(newBook) - 1;

    createBookElem(newBook, indexOfBook);

    clearInput()
};