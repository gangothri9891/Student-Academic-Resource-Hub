// Logout

document.getElementById("logoutBtn").addEventListener("click", function(){

    alert("Logged Out Successfully!");

    window.location.href="login.html";

});

// Search

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const keyword = document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    if (keyword === "") {
        alert("Please enter something to search.");
        return;
    }

    if (
        keyword.includes("resource") ||
        keyword.includes("note") ||
        keyword.includes("syllabus") ||
        keyword.includes("paper")
    ) {
        window.location.href = "resources.html";
    }
    else if (
        keyword.includes("book")
    ) {
        window.location.href = "books.html";
    }
    else if (
        keyword.includes("scholarship")
    ) {
        window.location.href = "scholarships.html";
    }
    else if (
        keyword.includes("intern") ||
        keyword.includes("internship")
    ) {
        window.location.href = "internships.html";
    }
    else if (
        keyword.includes("bookmark")
    ) {
        window.location.href = "bookmarks.html";
    }
    else {
        alert("No matching page found.");
    }

});