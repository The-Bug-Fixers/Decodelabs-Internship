const token = localStorage.getItem("token");

if (!token) {
    alert("Please login first!");
    window.location.href = "login.html";
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Logged out successfully!");

        window.location.href = "login.html";

    });

}

const user = JSON.parse(localStorage.getItem("user"));

const welcomeUser = document.getElementById("welcomeUser");

if (user && welcomeUser) {
    welcomeUser.textContent = `Welcome, ${user.name}!`;
}
