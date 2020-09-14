// Changer la couleur du texte en rouge
// Version JS
var links = document.querySelectorAll('.tabs a');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.style.color = "#FF0000"
}
// Version Jquery
$('.tabs a').css('color', '#FF0000');

// Avoir le 1er lien dans tabs avec l'attribut href
console.log($('.tabs a:first').attr('href')); // #home
// On change l'attribut href avec la valeur définie
console.log($('.tabs a:first').attr('href', 'AZEZE'));

// On ajoute la class active aux éléments
console.log($('.tabs li').addClass('active'));

// Retourne un tableau taille 1 avec l'élément parent
console.log($('.tabs li a:first').parent());

// Récupère les frères (d'un même parent) d'un élément indiqué
console.log($('.tabs li:first').siblings()); // les frères du 1er li sont le 2e et 3e li ici

// On recherche a dans le 1er li de la class tabs
console.log($('.tabs li:first').find('a'));

// On récupère le 1er ul
var ul = $('ul:first');
// On déclare du code HTML pour un li
var li = $('<li class="active"></li>');
// COde HTML pour un a
var a = $('<a href="#">Salut</a>');
// On ajoute le a dans le li
li.append(a);
// On ajoute le li au début du ul
ul.prepend(li);

var first_li = $('li:first');
// On déclare du code HTML pour un li
var li = $('<li class="active"></li>');
// COde HTML pour un a
var a = $('<a href="#">Salut</a>');
// On ajoute le a dans le li
li.append(a);
// On ajoute le li après le 1er
first_li.after(li); // before pour ajouter avant

var a = $('a:first');
// Modifie le texte du a
a.text('Salut');
// Modifie l'HTML du a
a.html('<strong>Salut</strong>');
// Retour le code HTML du a si on ne rentre rien à l'intérieur
console.log(a.html());
// Connaitre l'attribut CSS color du a
console.log(a.css('color'));

/* En général :
    Ne rien mettre dans une fonction jQuery = récupérer sa valeur
    Mettre quelquechose dans la fonction = insérer une valeur */

$('.tabs a').on('click', function (e) {
    // On récupère l'élément html
    // On peut utiliser les méthodes traditionnelles JS dessus
    console.log(this);
    // On récupère l'élément jQuery, sur lequel on peut utiliser des méthodes jQuery
    console.log($(this));
});
