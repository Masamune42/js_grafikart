// Nouvelle version : envoie de formulaire
var result = document.querySelector('#result');
var form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    result.innerHTML = 'Chargement...';
    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        // Si l'opération est complète
        if (httpRequest.readyState === 4) {
            result.innerHTML = '';
            if (httpRequest.status === 200) {
                result.innerHTML = httpRequest.responseText;
            } else {
                alert('impossible de contacter le serveur')
            }
        }
    }
    // Ouvre la requête AJAX
    httpRequest.open('POST', 'demo.php', true);

    // Les formulaires peuvent être mis directement dans FormData, plus simple
    var data = new FormData(form);
    httpRequest.send(data);
})

