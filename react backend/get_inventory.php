<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "hospital_inventory";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

$query = "SELECT * FROM inventory";
$result = $conn->query($query);

$inventory = [];
while ($row = $result->fetch_assoc()) {
    $inventory[] = $row;
}

echo json_encode(["success" => true, "inventory" => $inventory]);

$conn->close();
?>
