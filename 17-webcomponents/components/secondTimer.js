// On crée une class qui va représenter l'élément HTML à créer qui étend de HTMLElement
// export default : j'exporte ma class pour l'utiliser ailleurs
export default class secondTimer extends HTMLElement {
    // Si on veut observer un attribut, on l'indique ici
    static get observedAttributes() { return ['prefix']; }

    constructor() {
        super()
        this.i = 0
        this.span = document.createElement('span')
        this.span.classList.add('badge')
        this.span.classList.add('badge-secondary')
        this.span.innerHTML = this.i
        this.$prefix = document.createElement('span')
        // this.$prefix.innerHTML = this.getAttribute('prefix');
        this.appendChild(this.$prefix);
        this.appendChild(this.span)
    }

    // Exemples
    // Effectue l'action suivante quand l'élément est connecté
    connectedCallback() {
        this.timer = window.setInterval(() => {
            this.i++
            this.span.innerHTML = this.i
        }, 1000)
    }

    // Effectue l'action suivante quand l'élément est supprimé
    disconnectedCallback() {
        clearInterval(this.timer);
    }

    // Fonction qui détecte le changement de d'attribut et agit en fonction
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'prefix' && oldValue != newValue) {
            this.$prefix.innerHTML = newValue + ' : '
        }
    }
}