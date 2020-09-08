<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

//var_dump($_POST);
//echo '{"teste":1}';//formato json
$nome = [];
$nome[] = $_POST;
echo json_encode($nome);
exit;

