const API = "http://localhost:5000";

// Containers
const resourceContainer = document.getElementById("resourceContainer");
const bookContainer = document.getElementById("bookContainer");

// ==================== RESOURCES ====================

// Load Resources
async function loadResources() {

    const response = await fetch(API + "/resources");
    const resources = await response.json();

    resourceContainer.innerHTML = "";

    resources.forEach(resource => {

        resourceContainer.innerHTML += `

        <div class="card">

            <h3>${resource.title}</h3>

            <p>${resource.subject}</p>

            <a href="${resource.link}" target="_blank">Open</a>

            <br><br>

            <button class="btn-edit"
onclick="editResource(${resource.id},
'${resource.title}',
'${resource.subject}',
'${resource.link}')">
Edit
</button>

<button class="btn-delete"
onclick="deleteResource(${resource.id})">
Delete
</button>
        </div>

        `;

    });

}

// Add Resource
document.getElementById("addResourceBtn").addEventListener("click", async () => {

    const title = document.getElementById("rTitle").value.trim();
const subject = document.getElementById("rSubject").value.trim();
const link = document.getElementById("rLink").value.trim();

// Validation
if(title === "" || subject === "" || link === ""){

    alert("Please fill all resource fields.");
    return;

}

try{

    new URL(link);

}
catch{

    alert("Enter a valid Resource URL.");
    return;

}

    await fetch(API + "/resources", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            subject,
            link
        })

    });

    document.getElementById("rTitle").value = "";
    document.getElementById("rSubject").value = "";
    document.getElementById("rLink").value = "";

    loadResources();

});

// Edit Resource
async function editResource(id, title, subject, link) {

    const newTitle = prompt("Title", title);
    const newSubject = prompt("Subject", subject);
    const newLink = prompt("Link", link);

    await fetch(API + "/resources/" + id, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            title: newTitle,
            subject: newSubject,
            link: newLink

        })

    });

    loadResources();

}

// Delete Resource
async function deleteResource(id) {

    if (!confirm("Delete Resource?")) return;

    await fetch(API + "/resources/" + id, {

        method: "DELETE"

    });

    loadResources();

}

// ==================== BOOKS ====================

// Load Books
async function loadBooks() {

    const response = await fetch(API + "/books");

    const books = await response.json();

    bookContainer.innerHTML = "";

    books.forEach(book => {

        bookContainer.innerHTML += `

        <div class="card">

            <h3>${book.title}</h3>

            <p>Author : ${book.author}</p>

            <p>Subject : ${book.subject}</p>

            <a href="${book.link}" target="_blank">

                View Book

            </a>

            <br><br>

            <button class="btn-edit"
onclick="editBook(${book.id},
'${book.title}',
'${book.author}',
'${book.subject}',
'${book.link}')">
Edit
</button>

<button class="btn-delete"
onclick="deleteBook(${book.id})">
Delete
</button>

            </button>

        </div>

        `;

    });

}

// Add Book
document.getElementById("addBookBtn").addEventListener("click", async () => {

    const title = document.getElementById("bTitle").value.trim();
const author = document.getElementById("bAuthor").value.trim();
const subject = document.getElementById("bSubject").value.trim();
const link = document.getElementById("bLink").value.trim();

// Validation
if(title === "" || author === "" || subject === "" || link === ""){

    alert("Please fill all book fields.");
    return;

}

try{

    new URL(link);

}
catch{

    alert("Enter a valid Book URL.");
    return;

}
    await fetch(API + "/books", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            title,
            author,
            subject,
            link

        })

    });

    document.getElementById("bTitle").value = "";
    document.getElementById("bAuthor").value = "";
    document.getElementById("bSubject").value = "";
    document.getElementById("bLink").value = "";

    loadBooks();

});

// Edit Book
async function editBook(id, title, author, subject, link) {

    const newTitle = prompt("Title", title);
    const newAuthor = prompt("Author", author);
    const newSubject = prompt("Subject", subject);
    const newLink = prompt("Link", link);

    await fetch(API + "/books/" + id, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            title: newTitle,
            author: newAuthor,
            subject: newSubject,
            link: newLink

        })

    });

    loadBooks();

}

// Delete Book
async function deleteBook(id) {

    if (!confirm("Delete Book?")) return;

    await fetch(API + "/books/" + id, {

        method: "DELETE"

    });

    loadBooks();

}

// Initial Load
loadResources();
loadBooks();