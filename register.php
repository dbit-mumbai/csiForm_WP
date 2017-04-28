<?php
$connect=mysqli_connect("localhost", "root", "", "csi")or die("couldn't find server");

$fn=$_POST["fname"];
$mn=$_POST["mname"];
$ln=$_POST["lname"];
$dob=$_POST["birthdate"];
$gen=$_POST["gender"];
$contact=$_POST["mobno"];
$em=$_POST["emailid"];
$addr=$_POST["addr"];
$city=$_POST["city"];
$dept=$_POST["Department"];
$yr=$_POST["class"];
$id=$_POST["sid"];
$skl=$_POST["t1"];
$additional=$_POST["addt"];
$amt=$_POST["amt"];

$write=mysqli_query($connect,"INSERT INTO csireg values('','$fn','$mn','$ln','$dob','$gen','$contact','$em','$addr','$city','$dept','$yr','$id','$skl','$additional','$amt')")or die("error cannot write data into database");

?>


