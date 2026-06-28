const container = document.getElementById("bookContainer");

async function loadBooks() {

    try {

        const response = await fetch("http://localhost:5000/books");

        const books = await response.json();

        displayBooks(books);

    }

    catch {

        container.innerHTML="<h2>Failed to load books.</h2>";

    }

}

function displayBooks(list){

    container.innerHTML="";

    list.forEach(book=>{

        container.innerHTML +=`

        <div class="card">

            <h3>${book.title}</h3>

            <p>Author: ${book.author}</p>

            <a href="${book.link}" target="_blank">

                View Book

            </a>

        </div>

        `;

    });

}

document.getElementById("searchBtn").addEventListener("click",async()=>{

    const keyword=document.getElementById("searchInput").value.toLowerCase();

    const response=await fetch("http://localhost:5000/books");

    const books=await response.json();

    const filtered=books.filter(book=>

        book.title.toLowerCase().includes(keyword)||

        book.author.toLowerCase().includes(keyword)||

        book.subject.toLowerCase().includes(keyword)

    );

    displayBooks(filtered);

});

loadBooks();