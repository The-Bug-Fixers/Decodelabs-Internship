/* -------------------------------Courses.html---------*/

const search=document.getElementById("searchCourse");

if(search){
	search.addEventListener("keyup",function(){
		const value=this.value.toLowerCase();
		const cards=document.querySelectorAll(".course-card");
		cards.forEach(card=>{
			const text=card.innerText.toLowerCase();
			card.style.display=text.includes(value)?"block":"none";
		});
	});
}


/* ----------------------------assignment.html--------------------------------------*/

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


/* -----------------------------contact.html----------------------------------------------*/

const contactForm=document.getElementById("contactForm");

if(contactForm){
	contactForm.addEventListener("submit",function(e){
		e.preventDefault();
		alert("✅ Your message has been sent successfully!");
		this.reset();
	});
}

