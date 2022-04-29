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

    const title = document.createElement('h3');
    title.textContent = newBook.title;
    div.appendChild(title);

    const author = document.createElement('h3');
    author.textContent = newBook.author;
    div.appendChild(author);

    const pages = document.createElement('h3');
    pages.textContent = newBook.pages;
    div.appendChild(pages);

    const toggleRead = document.createElement('button');
    if (newBook.read) toggleRead.textContent = newBook.read
    else toggleRead.textContent = "unread";
    toggleRead.addEventListener("click", function () {
        toggleRead.style.backgroundColor = "red"
    });
    div.appendChild(toggleRead);

    const remove = document.createElement('button');
    remove.textContent = "remove";
    remove.addEventListener("click", function () {
        remove.parentElement.remove()
    });
    div.appendChild(remove);


    books.appendChild(div)

};

function createCardTemplate() {
    const div = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'title';
    div.appendChild(title);

    const author = document.createElement('h3');
    author.textContent = 'author';
    div.appendChild(author);

    const pages = document.createElement('h3');
    pages.textContent = 'pages';
    div.appendChild(pages);

    const toggleRead = document.createElement('button');
    toggleRead.addEventListener("click", function () {
        if (newBook.read == "read") {
            toggleRead.textContent = 'read';
            toggleRead.style.backgroundColor = "whitesmoke"
        } else {
            toggleRead.textContent = "unread";
            toggleRead.style.backgroundColor = "red";
            library[0].read = "unread"
        }
    });
    div.appendChild(toggleRead);

    const remove = document.createElement('button');
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