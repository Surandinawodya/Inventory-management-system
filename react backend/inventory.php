<?php
include 'db.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === "GET") {
    $sql = "SELECT * FROM inventory";
    $result = $conn->query($sql);
    $items = [];

    while ($row = $result->fetch_assoc()) {
        $items[] = $row;
    }
    echo json_encode($items);
}

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $data['name'];
    $description = $data['description'];
    $stock_level = $data['stockLevel'];
    $reorder_level = $data['reorderLevel'];

    $sql = "INSERT INTO inventory (name, description, stock_level, reorder_level) VALUES ('$name', '$description', '$stock_level', '$reorder_level')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Inventory updated"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error updating inventory"]);
    }
}
?>
