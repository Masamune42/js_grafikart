(function () {
    // On sélectionne les liens dans la div de class tabs
    var tabs = document.querySelectorAll('.tabs a');

    var afficherOnglet = function (a, animations) {
        if (animations === undefined) {
            animations = true;
        }
        var li = a.parentNode;
        var div = a.parentNode.parentNode.parentNode;
        // Contenu actif
        var activeTab = div.querySelector('.tab-content.active');
        // Contenu à afficher
        var aAfficher = div.querySelector(a.getAttribute('href'));

        if (li.classList.contains('active')) {
            return false;
        }

        // On retire la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active');

        // On ajoute la class active à l'onglet actuel
        li.classList.add('active');

        // On retire la class active sur le contenu actif
        // OLD
        // div.querySelector('.tab-content.active').classList.remove('active');

        // J'ajoute la class active sur le contenu correspondant à mon clic
        // OLD
        // div.querySelector(a.getAttribute('href')).classList.add('active');

        // Si les animations sont actifs (= si la page a déjà été chargée)
        if (animations) {
            // On ajoute la class fade sur l'élément actif
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            var transitionend = function () {
                // On retire la class fade et active
                this.classList.remove('fade');
                this.classList.remove('active');
                // On ajoute la class active et fade à l'élément à afficher
                aAfficher.classList.add('fade');
                aAfficher.classList.add('active');
                aAfficher.offsetWidth;
                // On ajoute la class in
                aAfficher.classList.add('in');
                // Supprimer l'évènement actuel
                // Permet d'éviter que les animations se chevauchent et d'avoir plusieurs textes en même temps
                activeTab.removeEventListener('transitionend', transitionend);
            }
            activeTab.addEventListener('transitionend', transitionend)
        }
        else {
            aAfficher.classList.add('active');
            activeTab.classList.remove('active');
        }

    }

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            afficherOnglet(this, true)
        })

    }

    var hashChange = function (e) {
        // On récupère l'onglet actif dans le lien
        var hash = window.location.hash
        // On récupère le lien avec le href qui est dans le lien
        var a = document.querySelector('a[href="' + hash + '"]');
        // Si j'ai un lien qui correspond à un href existant ET que mon élément n'a pas déjà la classe active
        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficherOnglet(a, e !== undefined);
        }
    }

    window.addEventListener('hashchange', hashChange())
    hashChange()
})()
