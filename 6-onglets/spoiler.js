/* var button = document.querySelector('.spoiler button')

button.addEventListener('click', function () { 
    this.nextElementSibling.classList.add('visible');
    this.parentNode.removeChild(this);
}) */

var elements = document.querySelectorAll('.spoiler')

console.log(elements);
var createSpoilerButton = function (element) {
    // on crée le span spoiler-content
    var span = document.createElement('span');
    span.className = "spoiler-content";
    // On y place le texte présent dans l'élément (spoiler)
    span.innerHTML = element.innerHTML;

    // on crée le bouton
    var button = document.createElement('button');
    button.textContent = 'Afficher le spoiler';

    // On ajoute les éléments au DOM
    element.innerHTML = '';
    element.appendChild(button);
    element.appendChild(span);

    // On met l'écouteur sur le click
    button.addEventListener('click', function () {
        // On supprime le bouton contenu dans le noeud parent (donc, le bouton créé)
        button.parentNode.removeChild(button);
        span.classList.add('visible');
    })

}

for (var i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i])
}