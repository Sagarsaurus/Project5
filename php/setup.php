<?php
//get the q parameter from URL
$userid=$_GET["userID"];
$con=mysqli_connect("localhost","root","","users");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


//Check for unique userid
$sql = "SELECT Color
        AS color 
        FROM users
        WHERE UserID='$userid'";

$color = mysqli_query($con,$sql);

$sql = "SELECT City 
        AS city
        FROM users
        WHERE UserID='$userid'";

$city = mysqli_query($con,$sql);

$sql = "SELECT FirstName 
        AS name
        FROM users
        WHERE UserID='$userid'";

$name = mysqli_query($con,$sql);

$sql = "SELECT FirstTime 
        AS firstTime
        FROM users
        WHERE UserID='$userid'";

$time = mysqli_query($con,$sql);

echo $color->fetch_object()->color.'#'.$city->fetch_object()->city.'#'.$name->fetch_object()->name.'#'.$time->fetch_object()->firstTime;


//echo $color.'#'.$city;       
if (!mysqli_query($con,$sql)){ die('Error: ' . mysqli_error($con)); }

mysqli_close($con);
?>