<?php
	$firstname = $_GET['First'];
	$lastname = $_GET['Last'];
	$userid = $_GET['UserID'];
	$password = $_GET['Password1'];
	$email = $_GET['Email'];
	$color = $_GET['Color'];
	$city = $_GET['City'];
	$con=mysqli_connect("localhost","root","","users");
	// Check connection
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }


	//Check for unique userid
	$sql = "SELECT * 
	        FROM users
	        WHERE UserID='$userid'";

	$result = mysqli_query($con,$sql);

	if (mysqli_num_rows($result)>0) {
		//If the userid is found, then show error message
		echo "duplicate";		
	} else {
		//If the userid is not found, then enter user information into table and show confirmation message
		$sql="INSERT INTO users(FirstName, LastName, UserID, Password, Email, Color, City, FirstTime)
      	VALUES('$firstname', '$lastname', '$userid', '$password', '$email', '$color', '$city', 1)"; 

      	if (!mysqli_query($con,$sql)){ die('Error: ' . mysqli_error($con)); }
		echo "added";
	}

	mysqli_close($con);
?>

