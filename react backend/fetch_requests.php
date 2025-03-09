<?php
// fetch_requests.php
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

// Fetch all the requests from the request_orders table
$sql = "SELECT * FROM request_orders ORDER BY request_date DESC";  // Ordered by the request date, descending
$result = $conn->query($sql);

$requests = [];
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $requests[] = $row;
    }
} else {
    $requests = [];
}

// Send the data as JSON
echo json_encode($requests);

$conn->close();
?>
