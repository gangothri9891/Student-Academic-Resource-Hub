const container = document.getElementById("internshipContainer");

let internships = [];

// Load Internships
async function loadInternships() {

    try {

        const response = await fetch("http://localhost:5000/internships");

        internships = await response.json();

        displayInternships(internships);

    }

    catch (error) {

        console.log(error);

        container.innerHTML = "<h2>Failed to load internships.</h2>";

    }

}

// Display Internships
function displayInternships(data) {

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `

        <div class="card">

            <h3>${item.role}</h3>

            <p><strong>Company:</strong> ${item.company}</p>

            <p><strong>Location:</strong> ${item.location}</p>

            <a href="${item.link}" target="_blank">

                <button>Apply Now</button>

            </a>

        </div>

        `;

    });

}

// Search
document.getElementById("searchBtn").addEventListener("click", function () {

    const keyword = document
        .getElementById("searchInternship")
        .value
        .trim()
        .toLowerCase();

    if (keyword === "") {

        displayInternships(internships);

        return;

    }

    const result = internships.filter(item =>

        item.company.toLowerCase().includes(keyword) ||

        item.role.toLowerCase().includes(keyword) ||

        item.location.toLowerCase().includes(keyword)

    );

    displayInternships(result);

});

// Initial Load
loadInternships();