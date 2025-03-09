<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "hospital_inventory";

$conn = new mysqli($host, $user, $password, $dbname);

// Check Connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}
?>
