<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "db.php";

$sql = "SELECT * FROM suppliers";
$result = $conn->query($sql);

$suppliers = [];
while ($row = $result->fetch_assoc()) {
    $suppliers[] = $row;
}

echo json_encode($suppliers);
?>
