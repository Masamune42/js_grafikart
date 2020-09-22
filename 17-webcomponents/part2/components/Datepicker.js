// On fait étendre la class de HTMLInputElement car c'est un élément dérivé de type input
export default class Datepicker extends HTMLInputElement {
    // Effectue l'action suivante quand l'élément est connecté
    connectedCallback() {
        this.calendar = flatpickr(this)
        this.classList.add('form-control');
    }

    // Effectue l'action suivante quand l'élément est supprimé
    disconnectedCallback() {
        this.calendar.destroy();
    }
}