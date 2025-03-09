<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";  
$password = "";  
$dbname = "hospital_inventory";  

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch updated repair-related requests
$sql = "SELECT id, item_type, hospital, request_date, description, repair_state FROM request_orders WHERE request_type = 'repair'";
$result = $conn->query($sql);

$repairs = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $repairs[] = $row;
    }
} 

echo json_encode($repairs);
$conn->close();
?>
