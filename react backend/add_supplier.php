<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "hospital_inventory";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data["supplier_id"]) && !empty($data["name"]) && !empty($data["email"]) && !empty($data["address"])) {
    $supplier_id = $data["supplier_id"];
    $name = $data["name"];
    $email = $data["email"];
    $address = $data["address"];

    $stmt = $conn->prepare("INSERT INTO suppliers (supplier_id, name, email, address) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $supplier_id, $name, $email, $address);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Supplier added successfully"]);
    } else {
        echo json_encode(["error" => "Database error: " . $stmt->error]);
    }
} else {
    echo json_encode(["error" => "Invalid input: Missing fields"]);
}
?>
