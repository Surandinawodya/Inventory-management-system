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

// Get JSON input from frontend
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["name"], $data["description"], $data["stockLevel"], $data["reorderLevel"])) {
    $name = $conn->real_escape_string($data["name"]);
    $description = $conn->real_escape_string($data["description"]);
    $stockLevel = intval($data["stockLevel"]);
    $reorderLevel = intval($data["reorderLevel"]);

    $query = "INSERT INTO inventory (name, description, stock_level, reorder_level) VALUES ('$name', '$description', $stockLevel, $reorderLevel)";

    if ($conn->query($query)) {
        echo json_encode(["success" => true, "message" => "Item added successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error adding item"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close();
?>
