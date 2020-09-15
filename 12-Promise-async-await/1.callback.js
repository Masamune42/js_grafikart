// Le principe est d'utiliser, pour chaque appel de requête, des fonctions / callback en paramètre
/**
 * Fonction qui fait une requête AJAX
 * @param {*} url Lien à appeler
 * @param {*} success Fonction de succès
 * @param {*} error Fonction d'erreur
 */
var get = function (url, success, error) {
    var xhr = new XMLHttpRequest();

    // On écoute le changement de statut
    xhr.onreadystatechange = function () {
        // Quand la requête est terminée
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Si on fait un return responseText, elle aura lieu sur la fonction ici et pas sur la fonction parente qui n'a aucun return
                // Donc, si on appelle la fonction, on ne pourra pas récupérer dans une variable la réponse car asynchrone
                // On appelle la fonction (callback) pour lui envoyer la réponse, elle sera exécutée quand la requête AJAX sera terminée
                success(xhr.responseText);
            } else {
                error(xhr);
            }

        }
    }

    // Ouverture de la requête en asynchrone (true)
    xhr.open('GET', url, true)
    // Envoi de la requête
    xhr.send()
}

// Obtenir les posts d'un utilisateur
var getPosts = function (success, error) {
    // 2e paramètre : fonction qui prend en paramètre la réponse
    // 3e paramètre : fonction qui prend en paramètre l'erreur
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        // Récupération de la réponse au format JSON dans une variable en la convertissant en objet
        var users = JSON.parse(response);
        get('https://jsonplaceholder.typiczeode.com/posts?userId=' + users[0].id, function (response) {
            var posts = JSON.parse(response);
            success(posts);
        }, function (e) {
            error('Erreur AJAX : ' + e);
        })
    }, function (e) {
        error('Erreur AJAX : ' + e);
    });
}


getPosts(function (posts) {
    console.log('Le premier article ', posts[0]);
}, function (error) {
    console.error(error)
});