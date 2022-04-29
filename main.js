let library = [];

const books = document.querySelector("#books");
//books.style.backgroundColor = "yellow";

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function createBookElem(newBook) {

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
    if (newBook.read) toggleRead.textContent = newBook.read
    else toggleRead.textContent = "Unread";
    toggleRead.addEventListener("click", function () {
        toggleRead.style.backgroundColor = "red"
    });
    div.appendChild(toggleRead);

    const remove = document.createElement('button');
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
        remove.parentElement.remove()
    });
    div.appendChild(remove);


    books.appendChild(div)

};

function addBook() {
    document.querySelector("#form").style.display = "none";

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages, read);
    console.log(newBook.title);
    library.push(newBook);

    //document.getElementById('display').textContent = newBook.title;
    createBookElem(newBook);
    clearInput()
    //displayFirstBook();
};

function displayFirstBook() {
    console.log(document.getElementById("author"));
    document.getElementById("display").textContent = document.getElementById("author").value;
};

function popupForm() {
    document.querySelector("#form").style.display = "flex";
};

function clearInput () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("pages").value = "";
}