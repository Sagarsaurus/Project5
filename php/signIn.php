<?php
    $userid = $_GET['UserID'];
    $pass = $_GET['pass'];
    $con=mysqli_connect("localhost","root","","users");
    // Check connection
    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }


    //Check for unique userid
    $sql = "SELECT * 
            FROM users
            WHERE (UserID='$userid'
            AND Password='$pass')";

    $result = mysqli_query($con,$sql);

    if (mysqli_num_rows($result)>0) {
        //If the userid is found, then show error message
        echo "success";       
    } else {
        if (!mysqli_query($con,$sql)){ die('Error: ' . mysqli_error($con)); }
        echo "failed";
    }

    mysqli_close($con);

      // while($row = mysqli_fetch_array($result)){
      //   echo $row['FirstName'] . " -- " . $row['LastName'] . " -- " . $row['UserID'] . " -- " . $row['Password'] . " -- " . $row['Email'] . " -- " . $row['PID'] ;
      // }

?>
