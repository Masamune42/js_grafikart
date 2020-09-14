var afficherOnglet = function ($a, duration) {
    if (duration === undefined) {
        duration = 500;
    }
    // On récupère le parent de $a, $li
    var $li = $a.parent();

    // Si l'élément cliqué est déjà active, ne fait rien
    if ($li.hasClass('active')) {
        return false;
    }
    // var target = $($a.attr('href')); // Va retourner #home, #mentions...
    // On peut utiliser la ligne au dessus pour utilsier l'id trouvé dans un sélecteur jQuery, ex : $('#home')
    var $target = $($a.attr('href'));
    // On retire la class active à tous les frères de $li
    $li.siblings('.active').removeClass('active');
    // On ajoute la class active à $li
    $li.addClass('active');


    // On masque tous les autres onglets
    // :visible : spécifique à jQuery, indique que l'on veut sélectionner tous les éléments visibles
    $target.siblings(':visible').fadeOut(duration, function () { // 500ms pour masquer et fonction à la fin de l'effet
        // On affiche le contenu qui a été cliqué
        $target.fadeIn(duration);
    });
}

$('.tabs a').click(function (e) {
    e.preventDefault();
    // $a -> référence à un élément jQuery
    var $a = afficherOnglet($(this));

});

// Détection du hash
var hash = window.location.hash;
if (hash != "") {
    var $a = $('a[href="' + hash + '"]');
    if ($a.length > 0) {
        afficherOnglet($a, 0);
    }
}

// data : données traduites automatiquement du json
// jqXHR : Objet qui contient des méthodes comme : readystate... (ressemble à l'objet XMLHttpRequest utilisé en JS pur)
// textStatus : indique le statut (success)
var $ul = $('#users');

var $loader = $('<div>Chargement</div>').appendTo($('body'));

// Méthode GET jQuery avec le lien de la page appelée
// Existe aussi en POST
$.get('https://jsonplaceholder.typicode.com/users')
    .done(function (data, textStatus, jqXHR) { // Lorsque la requête est finie
        // Pour chaque user que l'on reçoit
        data.forEach(function (user) {
            // On déclare un point de la liste et on y écrit chaque nom
            var $li = $('<li>').text(user.name);
            // On ajoute $li à $ul à chaque fois
            $li.appendTo($ul);
        })
    }).fail(function (jqXHR, textStatus, errorThwrown) { // Si elle échoue
        console.log('fail')
    }).always(function () { // Dans tous les cas
        $loader.remove();
        console.log('always')
    })
