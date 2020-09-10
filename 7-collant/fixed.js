(function () {
    // On récupère le menu du haut de page
    var element = document.querySelector('.menu');
    // position de l'élément par rapport au haut de la fenêtre + quantité de scroll
    var top = element.getBoundingClientRect().top + scrollY;
    var onScroll = function () {
        // On vérifie que le menu a la class fixed
        var hasScrollClass = element.classList.contains('fixed');
        // Si j'ai plus scroll que la position du menu du haut de page et que l'élément n'a pas déjà la class fixed, on fixe le menu en haut de la page
        if (scrollY > top && !hasScrollClass) {
            element.classList.add('fixed');
        } else if(scrollY < top && hasScrollClass) {
            element.classList.remove('fixed');
        }
    }
    window.addEventListener('scroll', onScroll)
})()