

var links = document.querySelectorAll('.meteo');
var result = document.getElementById('result');
for (let i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        result.innerHTML = 'Chargement';
        var httpRequest = new XMLHttpRequest;
        httpRequest.onreadystatechange = function () {
            // Si l'opération est complète
            if (httpRequest.readyState == 4) {
                result.innerHTML = httpRequest.responseText
            }
        }
        // Ouvre la requête AJAX
        httpRequest.open('GET', this.getAttribute('href'), true);
        // Envoi la requête
        httpRequest.send();
    })
}

