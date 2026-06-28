const container = document.getElementById("resourceContainer");

async function loadResources() {

    try {

        const response = await fetch("http://localhost:5000/resources");

        const resources = await response.json();

        displayResources(resources);

    } catch (error) {

        container.innerHTML = "<h3>Failed to load resources.</h3>";

    }

}

function displayResources(list) {

    container.innerHTML = "";

    list.forEach(function(resource) {

        container.innerHTML += `

        <div class="card">

            <h3>${resource.title}</h3>

            <p>${resource.subject}</p>

            <a href="${resource.link}" target="_blank">Open</a>

        </div>

        `;

    });

}

document.getElementById("searchBtn").addEventListener("click", async function() {

   const keyword = document.getElementById("searchInput").value.trim().toLowerCase();

if(keyword === ""){

    alert("Enter something to search.");

    return;

}

    const response = await fetch("http://localhost:5000/resources");

    const resources = await response.json();

    const filtered = resources.filter(function(resource) {

        return resource.title.toLowerCase().includes(keyword) ||
               resource.subject.toLowerCase().includes(keyword);

    });

    displayResources(filtered);

});

loadResources();