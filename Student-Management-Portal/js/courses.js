const token = localStorage.getItem("token");

async function loadCourses() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/courses",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (data.success) {

            const container = document.getElementById("courseContainer");

            container.innerHTML = "";

            data.courses.forEach(course => {

               container.innerHTML += `<div class="course-card">
                            <i class="fa-solid fa-book-open fa-2x" style="color:#2563eb"></i>
                        <h2>${course.courseName}</h2>
                        <p><strong>Course Code:</strong> ${course.courseCode}</p>
                        <p><strong>Faculty:</strong> ${course.faculty}</p>
                        <p><strong>Credits:</strong> ${course.credits}</p>
                        <p><strong>Progress:</strong></p>
                        <progress value="75" max="100"></progress>
                        <button>View Course</button>
                    </div>
                `;

            });

        }

    } catch (error) {
        console.log(error);
    }

}

loadCourses();