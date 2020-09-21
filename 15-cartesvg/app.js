// On récupère toute la div map
let map = document.querySelector('#map')
// On récupère tous les liens de la carte (chaque morceau du SVG est un lien)
let paths = map.querySelectorAll('.map__image a')
// On récupère tous les liens de la liste
let links = map.querySelectorAll('.map__list a')

// Polyfill du foreach
// Détection sur les autres navigateurs si on a le forEach sur le Nodelist, sinon on utilise le Polyfill
if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}

// On détecte lorsque l'on passe sur la carte
// Normalement forEach n'existe pas sur les Nodelist normalement
paths.forEach((path) => {
    // On écoute à quel moment on rentre dans la zone
    path.addEventListener('mouseenter', function (e) {
        // On récupère l'id de la région que l'on survol et on lui retire 'region-
        let id = this.id.replace('region-', '')

        activeArea(id)
    })
})

// On détecte lorsque l'on passe sur un lien
links.forEach((link) => {
    link.addEventListener('mouseenter', function () {
        let id = this.id.replace('list-', '')
        activeArea(id)
    })
})

const activeArea = function (id) {
    // Pour chaque région .is-active, on lui retire la classe
    map.querySelectorAll('.is-active').forEach((items) => {
        items.classList.remove('is-active')
    })
    // Si on a aucun id en paramètre
    if (id !== undefined) {
        // On met .is-active sur l'élément sélectionné
        document.querySelector('#region-' + id).classList.add('is-active')
        // on ajoute 'list-' à l'id récupéré et on lui ajoute .is-active
        document.querySelector('#list-' + id).classList.add('is-active')
    }

}

// Si on passe de maniètre générale sur la carte, on désactive tou
map.addEventListener('mouseover', function () {
    activeArea();
})