
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

if (isset($data["id"])) {
    $id = intval($data["id"]);

    // Delete query
    $query = "DELETE FROM inventory WHERE id = $id";

    if ($conn->query($query)) {
        echo json_encode(["success" => true, "message" => "Item deleted successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error deleting item"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close();
?>
