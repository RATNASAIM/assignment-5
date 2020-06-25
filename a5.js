  function checkFirstName()
	{
		var fName = document.getElementById("firstName").value;
		var hello=/^[a-zA-Z ]{2,30}$/;
	
		if (hello.test(fName)){
			document.getElementById("firstNamePrompt").innerHTML="VALID";
			document.getElementById("firstNamePrompt").style.color="green";

			return true;
		}
		else
		{
			document.getElementById("firstNamePrompt").innerHTML="INVALID DATA!";
			document.getElementById("firstNamePrompt").style.color="red";
			return false
		}
	}
	
	function checkLastName()
	{
		var fName = document.getElementById("lastName").value;
		var regex=/^[a-zA-Z ]{2,30}$/;
	
		if (regex.test(fName)){
			document.getElementById("lastNamePrompt").innerHTML="VALID";
			document.getElementById("lastNamePrompt").style.color="green";
			return true;
		}
		else{
			document.getElementById("lastNamePrompt").innerHTML="INVALID DATA!";
				document.getElementById("lastNamePrompt").style.color="red";
			return false;
		}
	}
	function emailcheck()
	{
var fName=document.getElementById("email").value;
var correct=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

if (correct.test(fName)) {
	document.getElementById("emailwrite").innerHTML="VALID";
	document.getElementById("emailwrite").style.color="green";
			return true;

}
else{
			document.getElementById("emailwrite").innerHTML="INVALID DATA!";
				document.getElementById("emailwrite").style.color="red";
			return false;
		}
	}
function checkOnSubmit(){
	document.getElementById("finally").innerHTML=alert("YOUR FORM IS SUBMITTED TO DATABASE");

	}
