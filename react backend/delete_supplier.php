<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["supplier_id"])) {
    $supplier_id = $data["supplier_id"];

    $stmt = $conn->prepare("DELETE FROM suppliers WHERE supplier_id = ?");
    $stmt->bind_param("s", $supplier_id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Supplier deleted successfully"]);
    } else {
        echo json_encode(["error" => "Failed to delete supplier"]);
    }
} else {
    echo json_encode(["error" => "Invalid input"]);
}
?>
