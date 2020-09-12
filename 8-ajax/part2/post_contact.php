<?php
require '_inc.php';

sleep(2);

/* AJAX check  */
function isAjax()
{
    return (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
}

$errors = [];
$emails = ['contact@local.dev', 'depannage@local.dev', 'heimerdinger@local.dev'];

$validator = new Validator($_POST);
$validator->check('name', 'required');
$validator->check('email', 'required');
$validator->check('email', 'email');
$validator->check('message', 'required');
$validator->check('service', 'in', array_keys($emails));
$errors = $validator->errors();

if (!empty($errors)) {
    // Si on détecte du JSON
    if (isAjax()) {
        // On envoie les erreurs au format JSON
        echo json_encode($errors);
        // Indique le type reçu au navigateur
        header('Content-Type: application/json');
        // Indique le code de réponse
        http_response_code(400);
        die();
    }
    $_SESSION['errors'] = $errors;
    $_SESSION['inputs'] = $_POST;
    header('Location: index.php');
} else {
    // Si on détecte du JSON
    if (isAjax()) {
        // On envoie les erreurs au format JSON
        echo json_encode(['success' => 'Bravo !']);
        // Indique le type reçu au navigateur
        header('Content-Type: application/json');
        // Indique le code de réponse
        http_response_code(200);
        die();
    }
    $_SESSION['success'] = 1;
    $headers = 'FROM: ' . $_POST['email'];
    mail($emails[$_POST['service']], 'Formulaire de contact de ' . $_POST['name'], $_POST['message'], $headers);
    header('Location: index.php');
}
