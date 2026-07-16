
const assignmentSearch=document.getElementById("assignmentSearch");

if(assignmentSearch){
	assignmentSearch.addEventListener("keyup",function(){
		const value=this.value.toLowerCase();
		document.querySelectorAll(".assignment-card").forEach(card=>{
			card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";
		});
	});
}

const uploadForm=document.querySelector(".upload-form");

if(uploadForm){
	uploadForm.addEventListener("submit",function(e){
		e.preventDefault();
		alert("Assignment uploaded successfully!");
		this.reset();
	});
}

/*---------------------------------------------------------------------------------*/
const token = localStorage.getItem("token");

async function loadAssignments() {
    try {
        const response = await fetch(
            "http://localhost:5000/api/assignments",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log(data);   // <-- Add this

        const container = document.getElementById("assignmentContainer");
        container.innerHTML = "";

        data.assignments.forEach(assignment => {
            container.innerHTML += `
<div class="assignment-card">

    <h2>${assignment.title}</h2>

    <p><strong>Subject:</strong> ${assignment.subject}</p>

    <p><strong>Due Date:</strong>
        ${new Date(assignment.dueDate).toLocaleDateString()}
    </p>

    <span class="status ${assignment.status.toLowerCase()}">
        ${assignment.status}
    </span>

    <br><br>

    <input
        type="file"
        id="file-${assignment._id}"
        accept=".pdf,.doc,.docx"
    >

    <br><br>

    <button onclick="uploadAssignment('${assignment._id}')">
        Upload Assignment
    </button>

</div>
`;
        });

    } catch (error) {
        console.log(error);
    }
}


loadAssignments();

async function uploadAssignment(assignmentId) {

    const fileInput = document.getElementById(`file-${assignmentId}`);

    if (!fileInput.files.length) {
        alert("Please choose a file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {

        const response = await fetch(
            `http://localhost:5000/api/assignments/upload/${assignmentId}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        );

        const data = await response.json();

        alert(data.message);

        loadAssignments();

    } catch (error) {
        console.log(error);
    }
}

const search = document.getElementById("assignmentSearch");
search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".assignment-card").forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
    });
});


uploadForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Assignment uploaded successfully!");
    this.reset();
});