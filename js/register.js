const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Empty Fields
    if (name === "" || email === "" || password === "" || confirmPassword === "") {

        alert("Please fill all fields.");

        return;

    }

    // Password Match
    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Enter a valid email address.");

        return;

    }

    // Password Length Validation
    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }

    try {

        const response = await fetch("http://localhost:5000/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,
                email,
                password

            })

        });

        const data = await response.json();

        alert(data.message);

        if (data.message === "Registration Successful") {

            window.location.href = "login.html";

        }

    }

    catch (error) {

        console.error(error);

        alert("Something went wrong.");

    }

});