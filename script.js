// Event listeners
document.querySelector("#add-book-btn").addEventListener('click', () => {
    document.querySelector("#add-book-modal").classList.toggle('active');
})

document.querySelector("#add-book-modal #close").addEventListener('click', () => {
    document.querySelector("#add-book-modal").classList.toggle("active");
})

let library;
library = (localStorage.library == undefined) ? [] : JSON.parse(localStorage.library);
drawLibrary();

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
    table.innerHTML = "";
    library.forEach(book => {
        let read = (book.read) ? '✓' : '✕';
        table.innerHTML += `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" class="read-status" data-value="${library.indexOf(book)}">${read}</span></td>
        <td><button data-value="${library.indexOf(book)}">Delete</button></td>
        </tr>`
    });

    table.querySelectorAll("button").forEach(button => {
        button.addEventListener('click', () => {
            let index = this['data-value'];
            library.splice(index, 1);
            drawLibrary();
        })
    })

    table.querySelectorAll('.read-status').forEach(a => {
        a.addEventListener('click', (event) => {
            let index = event.target.getAttribute("data-value");
            library[index].read = (library[index].read) ? false : true;
            drawLibrary();
        })
    })

    localStorage.library = JSON.stringify(library);
}

function addBookForm() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector("#read").checked;
    addBookToLibrary(title, author, read);
    drawLibrary();
    let popup = document.querySelector(".modal");
    popup.classList.toggle("active");
    popup.querySelectorAll("input").forEach(input => {
        if (input.type == "checkbox") {
            input.checked = false;
        }
        else {
            input.value = '';
        }
    })
}