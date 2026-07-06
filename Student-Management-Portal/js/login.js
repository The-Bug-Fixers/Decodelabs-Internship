const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
	e.preventDefault();
	const username=document.getElementById("username").value;
	const password=document.getElementById("password").value;
	if(username==="student" && password==="1234"){
		alert("Login Successful!");
		window.location.href="dashboard.html";
	}
	else{
		alert("Invalid Student ID or Password");
	}
});