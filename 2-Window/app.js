// On a accès à une nouvelle variable globale quand on écrit du JS côté navigateur
// On peut détecter beaucoup de choses par rapport à la fenêtre : taille, fermeture, etc...
// Chaque variable déclarée sera injectée dans window
var a = "Demo";
// console.log(window);

// Lorsque l'on déclare une variable dans le fichier js mais aussi dans les balises script du document html
// Les valeurs risquent d'empiéter l'une sur l'autre, on peut donc régler ce problème on déclare une fonction qui s'appelle
// Toutes les variables définies dans cette fonction ne sont pas accessibles depuis l'extérieur
(function () {
    c = "Demo"; // Accessible depuis l'extérieur
    var b = "Demo"; // Non accessible
})();

// Toutes les fonctions s'écrivent aussi sans utiliser window.
// Crée une fenêtre popup, bloque l'exécution du script qui suit tant qu'on l'a pas fermée
// window.alert('Salut les gens');

// Crée une fenêtre popup qui va demander une chaine de caractère
// var demo = window.prompt('Salut les gens');
// console.log(demo);

// Crée une fenêtre de validation, renvoie true si OK, false si Annuler
// var confirm = window.confirm('Salut les gens');
// console.log(confirm);

// Timer de 1000ms avant l'exécution de la fonction puis toutes les 1000ms
// Utilisation d'un callback, fonction directement appelée quand déclarée
var i = 0;
// window.setInterval(function () {
//     console.log(i++);
// }, 1000);

// N'exécute qu'une fois au bout de 1000ms
// window.setTimeout(function () {
//     console.log(++i);
// }, 1000);

// Permet de compter de 1 à 10
// i = 0
// var timer = window.setInterval(function () {
//     console.log(++i);
//     if (i == 10) {
//         window.clearInterval(timer);
//     }
// }, 1000);

// Permet au bout d'une seconde, d'afficher les nombres de 0 à 9
(function () {
    for (var j = 0; j < 10; j++) {
        (function (j) {
            window.setTimeout(function () {
                console.log(j);
            }, 1000);
        }(j))
    }
})();