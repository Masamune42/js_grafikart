// Ancienne version avec : Test de GET format JSON, test de POST de données

var links = document.querySelectorAll('.meteo');
var result = document.getElementById('result');
for (let i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        result.innerHTML = 'Chargement...';
        var httpRequest = new XMLHttpRequest;
        httpRequest.onreadystatechange = function () {
            // Si l'opération est complète
            if (httpRequest.readyState === 4) {
                result.innerHTML = '';
                if (httpRequest.status === 200) {
                    result.innerHTML = httpRequest.responseText;
                    // Si on reçoit du json, on le parse et on l'affiche suivant le type reçu
                    // var results = JSON.parse(httpRequest.responseText);
                    // var ul = document.createElement('ul');
                    // result.appendChild(ul);
                    // for (var i = 0; i < results.length; i++) {
                    //     var li = document.createElement('li');
                    //     li.innerHTML = results[i].name;
                    //     ul.appendChild(li);
                    // }
                } else {
                    alert('impossible de contacter le serveur')
                }
            }
        }
        // Ouvre la requête AJAX
        // 3e paramètre : true si asynchrone (s'effectue en parallèle), false pour synchrone (attend que la requête s'effectue pour continuer)
        httpRequest.open('POST', 'demo.php', true);
        // Exemple de récupération de données au format json
        // httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        // Exemple avec line qui n'existe pas
        // httpRequest.open('GET', 'http://localhost/dzdzede', true);

        // OLD VERSION
        // On déclare le Header qui correspond au formulaire pour que le serveur puisse traiter les infos qui vont être envoyées
        // application/x-www-form-urlencoded : infos sous forme d'url
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        // Ajout d'une variable
        // var a = "razeeaz&rdz=adaz";
        // Envoi la requête
        // encodeURIComponent échape les caractères spéciaux (=, &)
        // httpRequest.send("city="+encodeURIComponent(a)+"&nom=Henry");

        // NEW VERSION
        var data = new FormData();
        data.append('city','razeeaz&rdz=adaz');
        data.append('name','Marie');
        httpRequest.send(data);
    })
}

