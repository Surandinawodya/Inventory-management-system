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

// Retrieve data sent from the frontend
$data = json_decode(file_get_contents("php://input"));

if (isset($data->id) && isset($data->repair_state)) {
    $id = $data->id;
    $repair_state = $data->repair_state;

    // Update the repair state in the database
    $sql = "UPDATE request_orders SET repair_state = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $repair_state, $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Repair state updated successfully."]);
    } else {
        echo json_encode(["message" => "Failed to update repair state."]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid input data."]);
}

$conn->close();
?>
