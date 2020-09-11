(function () {
    // window devant permet d'appeler la fonction partout, même dans la console
    window.makeSticky = function (element) {
        // Variables
        // On récupère le menu du haut de page - OLD, valable que pour UN élément
        // var element = document.querySelector('.menu');
        // Renvoie la taille de l'élément et sa position relative
        var rect = element.getBoundingClientRect();
        // On détecte s'il y a un offset sur un élément, sinon vaut 0
        var offset = parseInt(element.getAttribute('data-offset') || 0, 10);
        // Si l'élément a l'attribut data-constraint, alors on récupère à l'intérieur, sinon la contrainte est body
        if (element.getAttribute('data-constraint')) {
            var constraint = document.querySelector(element.getAttribute('data-constraint'));
        } else {
            var constraint = document.body;
        }
        // On récupère les éléments de positions et de tailles sur la contrainte (menu en pointillés)
        var constraintRect = constraint.getBoundingClientRect();
        // La position du bas de l'élément = position du haut de la contrainte + hauteur de scroll + hauteur de contrainte - offset du texte collant - hauteur du texte
        var constraintBottom = constraintRect.top + scrollY + constraintRect.height - offset - rect.height;
        // position de l'élément par rapport au haut de la fenêtre + quantité de scroll
        var top = rect.top + scrollY;
        // On récupère la largeur de l'écran
        var width = rect.width;
        // On crée avant le menu d'origine un "faux" espace afin de garder le texte au même endroit
        var fake = document.createElement('div');
        // Il aura la hauteur et largeur du menu
        fake.style.width = rect.width + "px"
        fake.style.height = rect.height + "px"

        // Fonctions
        var onScroll = function () {
            // var hasScrollClass = element.classList.contains('fixed');
            if (scrollY > constraintBottom && element.style.position != 'absolute') {
                element.classList.remove('fixed');
                element.style.position = 'absolute';
                element.style.bottom = '0';
                element.style.top = 'auto';
                // } else if (scrollY > constraintBottom) { // COndition implicitement dans le prochain else if en testant l'inverse
                // Si l'élément n'a pas la position absolute
            }
            // Si j'ai plus scroll que la position du menu du haut de page et que l'élément n'a pas déjà la class fixed, on fixe le menu en haut de la page
            else if (scrollY > top - offset && scrollY < constraintBottom && element.style.position != 'fixed') {
                element.classList.add('fixed');
                element.style.position = 'fixed';
                element.style.top = offset + "px";
                element.style.bottom = 'auto';
                // On indique la largeur du menu pour ne pas perdre la partie de droite avec le scroll
                element.style.width = width + "px";
                // On place avant le menu d'origine
                element.parentNode.insertBefore(fake, element);
            } else if (scrollY < top - offset && element.style.position != 'static') {
                element.classList.remove('fixed');
                element.style.position = 'static';
                if (element.parentNode.contains(fake))
                    element.parentNode.removeChild(fake);
            }
        }

        // Fonction qui redimensionne la barre de menu
        var onResize = function () {
            // Largeur automatique
            element.style.width = "auto";
            // On annule tout ce qui a été fait le temps de redimensionner
            element.classList.remove('fixed');
            element.style.position = 'static';
            // On masque temporairement le fake
            fake.style.display = "none";
            // On recalcule la largeur et la hauteur
            rect = element.getBoundingClientRect();
            // On récupère les éléments de positions et de tailles sur la contrainte (menu en pointillés)
            constraintRect = constraint.getBoundingClientRect();
            // La position du bas de l'élément = position du haut de la contrainte + hauteur de scroll + hauteur de contrainte - offset du texte collant - hauteur du texte
            constraintBottom = constraintRect.top + scrollY + constraintRect.height - offset - rect.height;
            // position de l'élément par rapport au haut de la fenêtre + quantité de scroll
            top = rect.top + scrollY;
            fake.style.width = rect.width + "px"
            fake.style.height = rect.height + "px"
            // On retire le display none, pour le block
            fake.style.display = "block";
            // On refait le calcule du scroll pour tout remettre si besoin
            onScroll();
        }

        // Listener
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
    }

    var elements = document.querySelectorAll('[data-sticky]');
    for (let i = 0; i < elements.length; i++) {
        (function (element) {
            makeSticky(element);
        })(elements[i])
    }

})()