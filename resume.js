// Résumé :

// Objet window
window.setInterval(function () {
    // Ce code sera appellé toutes les secondes (1000ms)
}, 1000)

window.setTimeout(function () {
    // Ce code sera éxécuté une fois au bout de 3 secondes (3000ms)
}, 3000)

// DOM
// Pour sélectionner un élément
document.getElementById('demo') // Sélectionne l'élément avec l'id demo
document.querySelector('.demo') // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
document.getElementsByClassName('demo') // Sélectionne les éléments avec la class démo
document.getElementsByTagName('p') // Sélectionne les éléments <p>
var elements = document.querySelectorAll('.demo') // Sélectionne les éléments correspondant au sélecteur CSS 
// Ces méthodes renvoient un objet NodeList enumerable 
// On peut parcourir cette liste d'éléments comme un tableau
for (var i = 0; i < elements.length; ++i) {
    var element = elements[i] // objet de type Element
}

element.getAttribute('attribut') // Permet de récupérer la valeur d'un attribut
element.style // Permet de récupérer les styles associés à l'élément
element.classList // Permet de récupérer la liste des classes associées à un élément 
element.offsetHeight // Donne la hauteur réel de l'élément

element.setAttribute('href', 'http://grafikart.fr')
element.style.fontSize = '24px'
element.classList.add('red') // Ajoute une class à l'élément

element.childNodes // Renvoie tous les noeuds enfant (même les noeuds textes)
element.children // Renvoie tous les noeuds éléments
element.firstChild // Récupère le premier enfant 
element.firstElementChild // Récupère le premier enfant de type element 
element.previousElementSibling
element.nextElementSibling

element.appendChild(enfant) // ajoute un élément à un autre
element.removeChild(enfant) // supprime un enfant 
element.textContent = 'Salut' // Change la valeur du noeud texte 
element.innerHTML // Renvoie le contenu HTML de l'élément 
parentElement.insertBefore(nouvelElement, refElement)

// EventListener
element.addEventListener("Type d'évènement", callback)
// Par exemple pour détecter un clic sur un lien 
element.addEventListener('click', function () {
    window.alert('Vous avez cliqué sur le lien')
})

// Par exemple pour détecter un clic sur un lien 
element.addEventListener('click', function (e) {
    e.preventDefault() // Annule l'évènement
    e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    e.target // contient l'élément sur lequel on a cliqué
    e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur 
})

var next = function () {
    this.classList.add('red')
    this.removeEventListener('click', next)
}
element.addEventListener('click', next)