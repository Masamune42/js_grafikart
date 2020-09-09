// On sélectionne les liens dans la div de class tabs
var tabs = document.querySelectorAll('.tabs a');

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        var li = this.parentNode;
        var div = this.parentNode.parentNode.parentNode;

        if (li.classList.contains('active')) {
            return false;
        }

        // On retire la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active');

        // On ajoute la class active à l'onglet actuel
        li.classList.add('active');

        // On retire la class active sur le contenu actif
        div.querySelector('.tab-content.active').classList.remove('active');

        // J'ajoute la class active sur le contenu correspondant à mon clic
        div.querySelector(this.getAttribute('href')).classList.add('active');
    })

}