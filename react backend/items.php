<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "hospital_inventory");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "GET") {
    $result = $conn->query("SELECT * FROM items");
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
} elseif ($method == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("INSERT INTO items (name, quantity) VALUES (?, ?)");
    $stmt->bind_param("si", $data['name'], $data['quantity']);
    $stmt->execute();
    echo json_encode(["message" => "Item added successfully"]);
} elseif ($method == "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("UPDATE items SET name=?, quantity=? WHERE id=?");
    $stmt->bind_param("sii", $data['name'], $data['quantity'], $data['id']);
    $stmt->execute();
    echo json_encode(["message" => "Item updated successfully"]);
} elseif ($method == "DELETE") {
    $id = $_GET['id'];
    $stmt = $conn->prepare("DELETE FROM items WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(["message" => "Item deleted successfully"]);
}

$conn->close();
?>
