
const user = JSON.parse(localStorage.getItem("user"));
 const token = localStorage.getItem("token");
if (user) {
    document.getElementById("studentName").textContent = user.name;
    document.getElementById("studentEmail").textContent = user.email;
}

async function loadProfile() {
   
    try {
        const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();
        if (data.success) {
            const user = data.user;
            document.getElementById("studentName").value = user.name;
            document.getElementById("studentBranch").value =
                user.branch;
            document.getElementById("studentRoll").value =
                user.rollNo;
            document.getElementById("studentSemester").value =
                user.semester;
            document.getElementById("studentEmail").value =
                user.email;
            document.getElementById("studentPhone").value =
                user.phone;
        }
    } catch (error) {
        console.log(error);
    }
}

loadProfile();


const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

editBtn.addEventListener("click", () => {

    document.getElementById("studentName").disabled = false;
    document.getElementById("studentRoll").disabled = false;
    document.getElementById("studentBranch").disabled = false;
    document.getElementById("studentSemester").disabled = false;
    document.getElementById("studentPhone").disabled = false;

    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";

});


saveBtn.addEventListener("click", async () => {

    const response = await fetch(
        "http://localhost:5000/api/auth/profile",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({

                name: document.getElementById("studentName").value,
                rollNo: document.getElementById("studentRoll").value,
                branch: document.getElementById("studentBranch").value,
                semester: document.getElementById("studentSemester").value,
                phone: document.getElementById("studentPhone").value

            })

        }
    );

    const data = await response.json();

    if (data.success) {

        alert("Profile Updated Successfully!");

        loadProfile();

        document.getElementById("studentName").disabled = true;
        document.getElementById("studentRoll").disabled = true;
        document.getElementById("studentBranch").disabled = true;
        document.getElementById("studentSemester").disabled = true;
        document.getElementById("studentPhone").disabled = true;

        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";

    } else {

        alert(data.message);

    }

});