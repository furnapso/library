// Event listeners
document.querySelector("#add-book").addEventListener('click', () => {
    document.querySelector(".modal").classList.toggle('active');
})

document.querySelector("#close").addEventListener('click', () => {
    document.querySelector(".modal").classList.toggle("active");
})

let library = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(title, author, read) {
    library.push(new Book(title, author, read));
}

function drawLibrary() {
    const table = document.querySelector("tbody");
    library.forEach(book => {
        let checked = (book.read) ? '✓' : '✕';
        table.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${checked}</td></tr>`
    });
}

function addBookForm() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector("#read").checked;
    addBookToLibrary(title, author, read);
    drawLibrary();
    document.querySelector(".modal").classList.toggle("active");
}