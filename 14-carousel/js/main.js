// Classe pour créer un carousel
class Carousel {
    /**
     * Constructeur
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
     * @param {Object} options.slidesVisible Nombre d'éléments visibles dans un slide
     */
    constructor(element, options = {}) {
        this.element = element;
        // On ne peut pas mettre this.options = options car si un des éléments n'est pas présent on va avoir des problèmes
        // On utilise la méthode assign() avec :
        // param1 : objet qui va obtenir les propriétés fusionnées (ici vide)
        // param2 : objet avec propriétés par défaut
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        // On récupère les enfants qui sont des éléments HTML : div.item
        // On appelle dans un tableau les éléments enfants, on utilise call pour les récupérer au moment où le script est exécuté
        // On converti element.children nodeList en un tableau avec un tableau vide [], la méthode slice et appeler en passant les éléments en paramètre
        this.children = [].slice.call(element.children);
        // On crée une div .carousel
        let root = this.createDivWithClass('carousel')
        // On crée une div .carousel__container
        let container = this.createDivWithClass('carousel__container')
        // On ajoute le container dans root
        root.appendChild(container);
        // On place le root dans l'élément
        this.element.appendChild(root);
        // On déplace tous les enfants présents de l'élément dans le container
        this.children.forEach(child => {
            container.appendChild(child)
        });
    }

    /**
     * Fonction qui crée une div avec un nom de classe
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }
}

window.addEventListener("load", () => {
    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3,
        slidesVisible: 3
    })
})