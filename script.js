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
    library.push(Book(title, author, read));
}