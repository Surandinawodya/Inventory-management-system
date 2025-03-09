<?php
// submit_order_request.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database credentials
$servername = "localhost";
$username = "root";  // Your DB username
$password = "";  // Your DB password
$dbname = "hospital_inventory";  // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data from the request form
$request_type = $_POST['request_type'];
$hospital = $_POST['hospital'];
$item_type = $_POST['item_type'];
$description = $_POST['description'];
$request_date = $_POST['date'];
$contact = $_POST['contact'];

// Insert data into the database
$sql = "INSERT INTO request_orders (request_type, hospital, item_type, description, request_date, contact)
        VALUES ('$request_type', '$hospital', '$item_type', '$description', '$request_date', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "New request recorded successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
