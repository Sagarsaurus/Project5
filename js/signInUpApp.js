function signIn() {
	var userID = document.forms["signInForm"]["UserIDLogin"].value;
	var password = document.forms["signInForm"]["pass"].value;
	var xmlhttp = new XMLHttpRequest();
	var nameValuePairs = "UserID="+userID+"&pass="+password;
	xmlhttp.open("GET", "php/signIn.php?"+nameValuePairs, false); //AJAX Set request
	xmlhttp.send(); //AJAX Send request
    if(xmlhttp.responseText.trim()=="failed"){
		document.getElementById("useridlogin").style.color = 'red';
		document.getElementById("passwordlogin").style.color = 'red';
		document.getElementById("UserIDLogin").style.backgroundColor = 'yellow';	
		document.getElementById("pass").style.backgroundColor = 'yellow';
		document.getElementById("loginError").textContent = "Invalid Credentials";
		document.getElementById("loginError").style.color='red';    	
    }
    else {
		window.location.assign("weather.html?userID="+userID);
    } 
}


function signUp(){
	var verified = true;
	var errorString ='';
	var tab = "&nbsp; &nbsp; &nbsp; &nbsp;";

	//Verify First Name
	var firstName = document.forms["signUpForm"]["First"].value;
	if(firstName.length == 0){ 
		verified = false;
		errorString += tab + "Please Enter a Valid First Name <br>";
		document.getElementById("firstName").style.color = 'red';
		document.getElementById("First").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("firstName").style.color = 'black';
		document.getElementById("First").style.backgroundColor = 'white';		
	}

	//Verify Last Name
	var lastName = document.forms["signUpForm"]["Last"].value;
	if(lastName.length == 0){ 
		verified = false;
		errorString += tab + "Please Enter a Valid Last Name <br>";	
		document.getElementById("lastName").style.color = 'red';
		document.getElementById("Last").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("lastName").style.color = 'black';
		document.getElementById("Last").style.backgroundColor = 'white';		
	}

	//Verify User ID
	var userID = document.forms["signUpForm"]["UserID"].value;
	if(userID.length < 8 ||userID.length > 15){ 
		verified = false;
		errorString += tab + "Please enter a Valid User ID. <br>";	
		document.getElementById("userid").style.color = 'red';
		document.getElementById("UserID").style.backgroundColor = 'yellow';
	} else if( /\s/.test(userID) ) {
		verified = false;
		errorString += tab + "Please enter a User ID with no spaces. <br>";	
		document.getElementById("userid").style.color = 'red';
		document.getElementById("UserID").style.backgroundColor = 'yellow';		
	} else  {
		document.getElementById("userid").style.color = 'black';
		document.getElementById("UserID").style.backgroundColor = 'white';		
	}

	//Verify Password
	var password1 = document.forms["signUpForm"]["Password1"].value;
	var password2 = document.forms["signUpForm"]["Password2"].value;
	if(password1.length < 8 || password1.length > 15){ 
		verified = false;
		errorString += tab + "Your Password must be between 8 and 15 characters long. <br>";	
		document.getElementById("password1").style.color = 'red';
		document.getElementById("Password1").style.backgroundColor = 'yellow';
	} else if(password1!=password2){ 
		verified = false;
		errorString += tab + "Passwords must match. <br>";	
		document.getElementById("password1").style.color = 'red';
		document.getElementById("Password1").style.backgroundColor = 'yellow';
		document.getElementById("password2").style.color = 'red';
		document.getElementById("Password2").style.backgroundColor = 'yellow';		
	} else {
		document.getElementById("password1").style.color = 'black';
		document.getElementById("Password1").style.backgroundColor = 'white';
		document.getElementById("password2").style.color = 'black';
		document.getElementById("Password2").style.backgroundColor = 'white';				
	}

	//Verify Email Address
	var email = document.forms["signUpForm"]["Email"].value;
	//var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	var regex = /[A-Za-z0-9][^.]+@[A-z0-9]+\.[A-z]{2,4}/;
	if( !(regex.test(email)) ){ 
		verified = false;
		errorString += tab + "Please Enter a Valid Email Address <br>";
		document.getElementById("email").style.color = 'red';
		document.getElementById("Email").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("email").style.color = 'black';
		document.getElementById("Email").style.backgroundColor = 'white';		
	}

	//Verify that city is selected
	var citySelect = document.getElementById("cities");
	var value = citySelect.options[citySelect.selectedIndex].value;
	if(value=="noneSelected") {
		verified=false;
		errorString+=tab + "Please select a city <br>";
		document.getElementById("citySelect").style.color = 'red';
		document.getElementById('cities').style.backgroundColor='yellow';
	} else {
		document.getElementById("citySelect").style.color = 'black';
		document.getElementById('cities').style.backgroundColor='white';
	}
	
	//verify that radio button is checked
	if(document.getElementById("redRadio").checked==false && document.getElementById("blueRadio").checked==false && document.getElementById("greenRadio").checked==false && document.getElementById("yellowRadio").checked==false && document.getElementById("purpleRadio").checked==false) {
		verified=false;
		errorString+=tab + "Please select a color <br>";
		document.getElementById("colorSelect").style.color = 'red';
	} else {
		document.getElementById("colorSelect").style.color = 'black';
	}

	if(verified==true){
		//Check Database for duplicate userid
		//Use AJAX to send data to server
		var xmlhttp = new XMLHttpRequest();
		var color = "";
		if(document.getElementById("redRadio").checked==true) {
			color = "red";
		}
		else if(document.getElementById("blueRadio").checked==true) {
			color = "blue";
		}
		else if(document.getElementById("greenRadio").checked==true) {
			color = "green";
		}
		else if(document.getElementById("yellowRadio").checked==true) {
			color="yellow";
		}
		else {
			color = "purple";
		}

		

		var citySelect = document.getElementById("cities");
		var city = citySelect.options[citySelect.selectedIndex].value;
		var nameValuePairs = "First="+firstName+"&Last="+lastName+"&UserID="+userID+"&Password1="+password1+"&Email="+email+"&Color="+color+"&City="+city;
		xmlhttp.open("GET", "php/signUp.php?"+nameValuePairs, false); //AJAX Set request
		xmlhttp.send(); //AJAX Send request
	    if(xmlhttp.responseText.trim()=="duplicate"){
			verified = false;	
			errorString += tab + "The User ID you entered is already taken. Please enter another User ID. <br>";
			document.getElementById("userid").style.color = 'red';
			document.getElementById("UserID").style.backgroundColor = 'yellow';	    	
	    } else if(xmlhttp.responseText=="added"){
			document.getElementById("userid").style.color = 'black';
			document.getElementById("UserID").style.backgroundColor = 'white';		    	
	    }
	}

	//Print Message
	var message = document.getElementById("message");
	if(!verified){
		message.style.color = 'red';		
		message.innerHTML = "Your application has the following errors:  <br> " + errorString;
	} else {
		message.style.color = 'green';
		message.innerHTML = "Your application is complete. Thank you for signing up for our service.";
		window.location.assign("weather.html?userID="+userID);
	}


}