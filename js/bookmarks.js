const container = document.getElementById("bookmarkContainer");

let bookmarks = [];

// Load Bookmarks
async function loadBookmarks() {

    try {

        const response = await fetch("http://localhost:5000/bookmarks");

        bookmarks = await response.json();

        displayBookmarks(bookmarks);

    }

    catch (error) {

        console.log(error);

        container.innerHTML = "<h2>Failed to load bookmarks.</h2>";

    }

}

// Display Bookmarks
function displayBookmarks(data) {

    container.innerHTML = "";

    data.forEach(bookmark => {

        container.innerHTML += `

        <div class="card">

            <h3>${bookmark.title}</h3>

            <p>${bookmark.category}</p>

            <a href="${bookmark.link}" target="_blank">

                <button>Open</button>

            </a>

        </div>

        `;

    });

}

// Search
document.getElementById("searchBtn").addEventListener("click", function () {

    const keyword = document
        .getElementById("searchBookmark")
        .value
        .trim()
        .toLowerCase();

    if (keyword === "") {

        displayBookmarks(bookmarks);

        return;

    }

    const result = bookmarks.filter(bookmark =>

        bookmark.title.toLowerCase().includes(keyword) ||

        bookmark.category.toLowerCase().includes(keyword)

    );

    displayBookmarks(result);

});

// Initial Load
loadBookmarks();