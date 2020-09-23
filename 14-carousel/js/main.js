// Classe pour créer un carousel
class Carousel {

    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol
     * @callback moveCallback
     * @param {number} index 
     */

    /**
     * Constructeur
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} [options.slidesToScroll = 1] Nombre d'éléments à faire défiler
     * @param {Object} [options.slidesVisible = 1] Nombre d'éléments visibles dans un slide
     * @param {boolean} [options.loop = false] Doit-on boucler en fin de slide?
     */
    constructor(element, options = {}) {
        this.element = element;
        // On ne peut pas mettre this.options = options car si un des éléments n'est pas présent on va avoir des problèmes
        // On utilise la méthode assign() avec :
        // param1 : objet qui va obtenir les propriétés fusionnées (ici vide)
        // param2 : objet avec propriétés par défaut
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        // On récupère les enfants qui sont des éléments HTML : div.item
        // On appelle dans un tableau les éléments enfants, on utilise call pour les récupérer au moment où le script est exécuté
        // On converti element.children nodeList en un tableau avec un tableau vide [], la méthode slice et appeler en passant les éléments en paramètre
        this.children = [].slice.call(element.children);
        // On donne un numéro au1er item
        this.currentItem = 0
        // On crée une div .carousel
        this.root = this.createDivWithClass('carousel')
        // On crée une div .carousel__container
        this.container = this.createDivWithClass('carousel__container')
        // On ajoute le container dans root
        this.root.appendChild(this.container);
        // On place le root dans l'élément
        this.element.appendChild(this.root);
        this.moveCallbacks = [];
        // On déplace tous les enfants présents de l'élément dans le container
        this.items = this.children.map(child => {
            let item = this.createDivWithClass('carousel__item');
            item.appendChild(child);
            this.container.appendChild(item)
            return item
        });
        // On applique le style
        this.setStyle()
        // On crée les boutons de navigation
        this.createNavigation();
        this.moveCallbacks.forEach(cb => cb(0))
    }

    /**
     * Applique les bonnes dimensions aux éléments du carousel
     */
    setStyle() {
        // On calcule le ratio en % du carousel__container (nombre d'images par ligne)
        // nb éléments total / nb éléments visibles
        let ratio = this.items.length / this.options.slidesVisible
        // On applique une width au carousel__container
        this.container.style.width = (ratio * 100) + "%";
        // Fonction qui applique une largeur à chaque élément d'un carousel__container
        this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + '%');
    }

    createNavigation() {
        // On crée les boutons
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        // On les ajoute au carousel
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        // On ajoute un event Listener sur les boutons qui appellent les fonctions pour scroll sur le côté
        // On bind(this) pour que l'on garde this = class et pas l'élément surlquel on a appuyé
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if(this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if(index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }

    next() {
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }

    prev() {
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {numb} index 
     */
    gotoItem(index) {
        // Si on veut aller à un index inférieur à 0
        if (index < 0) {
            index = this.items.length - this.options.slidesVisible
            // Si on veut aller à un index égale ou supérieur au à la taille des items
            // Ou bien si on veut aller à un index du talbeaux items qui n'existe pas
        } else if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem) {
            index = 0
        }
        // On détermine de combien on va translate
        let translateX = index * -100 / this.items.length
        // On translate sur le côté
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        // On récupère l'index de destination et on le met en index de l'item courant
        this.currentItem = index;
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove(cb) {
        this.moveCallbacks.push(cb)
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
        slidesToScroll: 2,
        slidesVisible: 3,
        loop: true
    })
})