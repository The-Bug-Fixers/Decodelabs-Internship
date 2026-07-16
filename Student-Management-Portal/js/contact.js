
const contactForm=document.getElementById("contactForm");

if(contactForm){
	contactForm.addEventListener("submit",function(e){
		e.preventDefault();
		alert("✅ Your message has been sent successfully!");
		this.reset();
	});
}
