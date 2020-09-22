// Ici on utilise le Shadow DOM
// Cela permet de créer un élément dans une partie appelée "#shadow-root" avec un style qui lui est propre
// Les styles CSS ne rentrer pas et ne sortent pas de la partie

// Pour récuper le bouton en JS il faut faire cela :
// document.querySelector('my-button').shadowRoot.querySelector('button');
export default class MyButton extends HTMLElement {
    constructor() {
        super()
        // mode : open -> permet d'accéder à l'élément via js
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = `
        <style>
            /* On peut déclarer directement du CSS ici pour donner une valeur par défaut */
            :host {
                --bg: #000
            }
            button {
                border: none;
                background: var(--bg);
                color: #FFF;
                border-radius: 3px;
                padding: 3px;
            }
        </style>
        <!-- slot permet de récupérer ce que on envoie de l'élément parent, meêm d'autres web components -->
        <!-- on peut renommer des slots pour attribuer des éléments -->
        <slot name="outbutton"></slot>
        <button><slot name="inbutton"/></button>`
    }
}