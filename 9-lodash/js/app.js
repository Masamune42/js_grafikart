/* global _ */
// String
// trim
var demo = " aze ";
console.log(_.trim(demo)); // Enlève les espace au début et à la fin de la chaine

var demo2 = '0000415000';
console.log(_.trim(demo2, '0')); // Enlève les caractères définis (ici 0) au début à la fin

// pad
var demo3 = '01';
console.log(_.pad(demo3, 6, '0')); // Rempli avec les caractères indiqués

// capitalize
var demo4 = 'john doe';
console.log(_.capitalize(demo4)); // Met en majuscule la 1ère lettre de la chaine

// snakeCase
console.log(_.snakeCase(demo4)); // Remplace les espaces par des underscores et les accents

// kebabCase
var demo5 = 'je suis une une URL intéressante';
console.log(_.kebabCase(demo5)) // Remplace les espaces par des tirets et les accents

// upperCase + comparaison avec la fonction JS
var demo6 = '__foo_bar__';
console.log(demo6.toUpperCase()); // Fonction JS permettant de passer tout en majusucule
console.log(_.upperCase(demo6)); // Fonction Lodash, idem mais retire les underscores

// Tableaux / Collection
var tab = [1, 2, 3];
var tab2 = [4, 5];
var comment = { username: 'John', content: 'Salut les gens' };
var tab3 = [1, comment, 3];

// concat
console.log(_.concat(tab, tab2, 4, 9)) // Concatène des tableaux ensemble. On peut passer autant d'arguements que possible

// without
console.log(_.without(tab, 2)); // Retire une valeur indiquée
console.log(_.without(tab3, comment)); // Fonctionne aussi avec des variables / objets. On peut retirer plusieurs éléments

// filter
console.log(_.filter(tab, function (element) { // Crée un filtre avec la règle indiquée en 2e paramètre dans une fonction
    return element > 1;
}))

// Collections
var users = [
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': true }
]
// filter
console.log(_.filter(users, function (user) { // Crée un filtre avec la règle indiquée en 2e paramètre dans une fonction
    return user.active;
}))
// Peut aussi être écrit
console.log(_.filter(users, { active: false })) // Ecriture simplifiée

// find
console.log(_.find(users, { active: false })) // Récupère le 1er élément du critère, très utilisé pour récupéré des éléments avec ID

// orderBy
console.log(_.orderBy(users, 'user', 'asc')); // Tri d'un tableau, sur un paramètre défini, asc ou desc
console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc'])); // Tri par 1er paramètre (user) puis par 2e paramètre (age)

var users2 = [
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': true }
]
// map (change l'objet)
console.log(_.map(users2, function (user) { // Parcours un tableau et change ses éléments avec une fonction
    user.age = user.age * 2;
    return user;
}));

// forEach
_.forEach(users, function (user, key) { // itération sur chaque élément d'un tableau en prenant l'élément et la clé
    console.log(key, '=>', user.user);
})

_.forEach(users[0], function (value, key) { // itération sur un élément du tableau en prenant chaque valeur et clé
    console.log(key, '=>', value);
})

// sample
console.log(_.sample(users)); // Retourne un élément au hasard

// sampleSize
console.log(_.sampleSize(users, 2)); // Retourne 2 éléments au hasard

// groupBy
console.log(_.groupBy(users, function (user) { // Retour un objet avec chaque élément trié suivant la règle de la fonction
    return user.user.substr(0, 1); // Tri suivant la 1ère lettre de chaque user
}));

// size
var user = users[0];
console.log(_.size(user)); // Retourne la taille de l'objet

// clone
var user2 = _.clone(user); // Clone un élément sans cloner son adresse
user2.age *= 3;
console.log(user); // user non altéré

// assign
_.assign(user2, { active: true, age: 2 }); // On passe un objet que l'on veut modifier et ses paramèrtres
console.log(user2);

var user3 = _.assign({}, user, { active: true, age: 3 }) // On déclare un objet vide, l'objet que l'on souhaite copier et les champs à modifier
console.log(user3);

// unset
_.unset(user3, 'age'); // Enlève un paramètre à un élément, marche aussi avec des objets dans l'objet : user.firstname si existe
console.log(user3);
_.set(user3, 'age', 25); // Rajoute un élément, crée l'élément même si c'est un objet
console.log(user3);
_.set(user3, 'user.0.age', 25); // Exemple avec un tableau
console.log(user3);

// has
user4 = { active: true, age: 2 };
if (_.has(user4, 'user.firstname') && user4.user.firstname === 'demo') { // vérifie si dans l'objet indiqué il y a l'objet recherché + le paramètre
    console.log('ok');
}
else {
    console.log('non');
}
// Equivalent
// get
if (_.get(user4, 'user.firstname', true) === 'demo') { // Essaye de récupérer l'élément sinon lui donne une valeur par défaut (3e paramètre) si l'élément n'existe pas
    console.log('ok');
}
else {
    console.log('non');
}

// N'utiliser que la librairie voulue
// Uniquement sous node.js après un npm i --save lodash
// var throttle = require('lodash/throttle');
// window.addEventListener('scroll', throttle(function () {
//     console.log('avec throttle');
// }, 200))