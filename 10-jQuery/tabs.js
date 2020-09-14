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