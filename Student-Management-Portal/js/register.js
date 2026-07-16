const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const password = document.getElementById("password").value.trim();

    try {

        const response = await fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                rollNo,
                email,
                phone,
                branch,
                semester,
                password
            })

        });

        const data = await response.json();

        if (data.success) {

            alert("Registration Successful!");
            window.location.href = "login.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);
        alert("Unable to connect to the server.");

    }

});