<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

define('ADMIN_PASSWORD', '4123');
define('DATA_DIR',    __DIR__ . '/data/');
define('UPLOADS_DIR', __DIR__ . '/uploads/');
define('ARTICLES_FILE', DATA_DIR . 'articles.json');

// Create directories if they don't exist
foreach ([DATA_DIR, UPLOADS_DIR] as $dir) {
    if (!file_exists($dir)) mkdir($dir, 0755, true);
}
if (!file_exists(ARTICLES_FILE)) file_put_contents(ARTICLES_FILE, '[]');

// ── GET: return all articles ──────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo file_get_contents(ARTICLES_FILE);
    exit;
}

// ── POST: save new article ────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Auth
    $password = $_POST['password'] ?? '';
    if ($password !== ADMIN_PASSWORD) {
        http_response_code(401);
        echo json_encode(['error' => 'Contraseña incorrecta']);
        exit;
    }

    // Validate required fields
    $required = ['slug', 'title', 'excerpt', 'category', 'date', 'readTime', 'content'];
    foreach ($required as $field) {
        if (empty($_POST[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Campo requerido: $field"]);
            exit;
        }
    }

    // Upload helper
    function uploadFile(string $field): string {
        if (!isset($_FILES[$field]) || $_FILES[$field]['error'] !== UPLOAD_ERR_OK) return '';
        $ext  = strtolower(pathinfo($_FILES[$field]['name'], PATHINFO_EXTENSION));
        $allowed = ['jpg','jpeg','png','gif','webp'];
        if (!in_array($ext, $allowed)) return '';
        $name = time() . '_' . $field . '.' . $ext;
        move_uploaded_file($_FILES[$field]['tmp_name'], UPLOADS_DIR . $name);
        return '/api/uploads/' . $name;
    }

    $coverUrl = uploadFile('cover');
    $infoUrl  = uploadFile('infographic');

    // If no file uploaded but a URL was provided
    if (!$coverUrl && !empty($_POST['coverUrl'])) $coverUrl = $_POST['coverUrl'];

    $article = [
        'slug'       => preg_replace('/[^a-z0-9\-]/', '', strtolower($_POST['slug'])),
        'title'      => $_POST['title'],
        'excerpt'    => $_POST['excerpt'],
        'category'   => $_POST['category'],
        'date'       => $_POST['date'],
        'readTime'   => $_POST['readTime'],
        'image'      => $coverUrl,
        'author'     => 'Equipo Brillo al Sur',
        'authorRole' => 'Regresémosle el Brillo al Sur',
        'content'    => $_POST['content'],  // already parsed HTML from JS
        'createdAt'  => date('c'),
    ];

    // Load existing, remove duplicate slug, prepend new article
    $articles = json_decode(file_get_contents(ARTICLES_FILE), true) ?: [];
    $articles = array_filter($articles, fn($a) => $a['slug'] !== $article['slug']);
    array_unshift($articles, $article);
    $articles = array_values($articles);

    file_put_contents(ARTICLES_FILE, json_encode($articles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode(['success' => true, 'slug' => $article['slug']]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Método no permitido']);
