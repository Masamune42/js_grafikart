// Permet d'écrire du code qui utilise des promesses d'une façon synchrone et de le récupérer de façon asynchrone
// On ne peut pas utiliser de await dans une fonction qui n'est pas asynchrone
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

// Avec async, on renvoie systématiquement une promesse
// On peut entourer les get avec un try/catch (mieux car englobe tout le code) OU faire un .catch après
var getPosts = async function () {
    var response = await get('https://jsonplaceholder.typicode.com/users') // un throw va être lancé s'il y a une erreur, attrapé par le catch en sorti
    var users = JSON.parse(response);
    response = await get('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id)
    var posts = JSON.parse(response);
    return posts;
}

// Exemple de récupération du 1er poste
var getFirstPost = async function () {
    var posts = await getPosts();
    return posts[0];
}

getPosts().then(function (posts) { // le getPosts va renvoyer une promesse
    console.log(posts[0]);
}).catch(catchError // Si la promesse échoue, on arrive dans le catch
).then(function () { // Dans tous les cas, on renvoie une promesse qu'on peut utiliser
    console.log('Fin des requêtes AJAX');
})

// Exemple  de fonction, si on veut appeler une fonction à la suite de l'autre
var demo = async function () {
    // On récupère un table avec la réponse du 1er puis celle du 2e
    var arr = await Promise.all([getPosts(), getFirstPost()]);
    console.log(arr);
}


demo()