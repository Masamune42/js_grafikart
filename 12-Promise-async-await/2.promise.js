// Utilisation des promesses
/**
 * Fonction qui fait une requête AJAX
 * @param {*} url Lien à appeler
 * @param {*} success Fonction de succès
 * @param {*} error Fonction d'erreur
 */
var get = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        // On écoute le changement de statut
        xhr.onreadystatechange = function () {
            // Quand la requête est terminée
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                }
            }
        }
        // Ouverture de la requête en asynchrone (true)
        xhr.open('GET', url, true)
        // Envoi de la requête
        xhr.send()
    })
}

var catchError = function (e) {
    console.error('Erreur ajax', e);
}

// Obtenir les posts d'un utilisateur
var getPosts = function () {
    // 1. On appelle cet URL qui renvoie une promesse
    return get('https://jsonplaceholder.typicode.com/users').then(function (response) { // 2. Une fois résolu, on utilise la fonction
        // 3. On parse la réponse une fois qu'on l'a
        var users = JSON.parse(response);
        // throw 'Salut' // Si on envoie un throw, il sera attrapé par le catch du getPosts
        // 4. on refait un appel qui renvoie une promesse
        return get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id)
    }).then(function (response) { // 5. Une fois la promesse du bloc précédent résolue, on appelle la fonction
        var posts = JSON.parse(response);
        return posts;
    })
}

getPosts().then(function (posts) { // le getPosts va renvoyer une promesse
    console.log(posts[0]);
}).catch(catchError // Si la promesse échoue, on arrive dans le catch
).then(function () { // Dans tous les cas, on renvoie une promesse qu'on peut utiliser
    console.log('Fin des requêtes AJAX');
})

/* 
* Promesses
* 1. On initialise une promesse
*    On y place une fonction avec en paramètres resolve et reject : méthodes à appeler en tant que résolution positive et négative
* let p = new Promise(function(resolve, reject) {
* ...
* ... 
* resolve(...) // 2. On fait un resolve en plaçant des paramètres
* })
* 3. On peut soit capturer la réponse, soit l'erreur, qui peuvent être enchainées
* p.then(function(response) { ... })
* .then(function(response) { ... })
* .then(function(response) { ... })... // On peut enchainer plein de then
* .catch(function(error) { ... })
*/