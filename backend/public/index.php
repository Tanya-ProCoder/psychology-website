<?php

$requestUri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($requestUri === '/api/health' && $method === 'GET') {
    echo json_encode([
        'status' => 'OK', 
        'message' => 'API is working',
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit;
}

if ($requestUri === '/api/v1/appointments' && $method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }
    
    $errors = [];
    if (empty($input['name'])) $errors[] = 'Name is required';
    if (empty($input['email'])) $errors[] = 'Email is required';
    if (empty($input['message'])) $errors[] = 'Message is required';
    
    if (!empty($errors)) {
        http_response_code(422);
        echo json_encode(['errors' => $errors]);
        exit;
    }
    
    $data = [
        'id' => uniqid(),
        'name' => $input['name'],
        'email' => $input['email'],
        'phone' => $input['phone'] ?? '',
        'message' => $input['message'],
        'service_type' => $input['service_type'] ?? 'individual',
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    file_put_contents('appointments.json', json_encode($data) . "\n", FILE_APPEND | LOCK_EX);
    
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Appointment created successfully',
        'data' => $data
    ]);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Endpoint not found']);