const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Empty Validation
    if(email === "" || password === ""){

        alert("Please fill all fields.");
        return;

    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Enter a valid email address.");
        return;

    }

    try {

        const response = await fetch("http://localhost:5000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        alert(data.message);

        if(data.message === "Login Successful"){

            window.location.href = "dashboard.html";

        }

    }
    catch(error){

        alert("Cannot connect to server.");

    }

});