const container = document.getElementById("scholarshipContainer");

let scholarships = [];

// Load Scholarships
async function loadScholarships() {

    try {

        const response = await fetch("http://localhost:5000/scholarships");

        scholarships = await response.json();

        displayScholarships(scholarships);

    }

    catch (error) {

        console.log(error);

        container.innerHTML = "<h2>Failed to load scholarships.</h2>";

    }

}

// Display Scholarships
function displayScholarships(data) {

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `

        <div class="card">

            <h3>${item.name}</h3>

            <p><strong>Provider:</strong> ${item.provider}</p>

            <a href="${item.link}" target="_blank">

                <button>Visit Website</button>

            </a>

        </div>

        `;

    });

}

// Search
document.getElementById("searchBtn").addEventListener("click", function () {

    const keyword = document
        .getElementById("searchScholarship")
        .value
        .trim()
        .toLowerCase();

    if (keyword === "") {

        displayScholarships(scholarships);

        return;

    }

    const result = scholarships.filter(item =>

        item.name.toLowerCase().includes(keyword) ||

        item.provider.toLowerCase().includes(keyword)

    );

    displayScholarships(result);

});

// Initial Load
loadScholarships();