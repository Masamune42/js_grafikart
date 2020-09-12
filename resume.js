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

// AJAX
// Pour les vieux navigateurs, utiliser le shim
var getHttpRequest = function () {
    var httpRequest = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { }
        }
    }

    if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance XMLHTTP');
        return false;
    }

    return httpRequest
}

var xhr = getHttpRequest()
// OU
var xhr = new XMLHttpRequest;
xhr.open('GET', 'http://localhost/demo', true)
// On envoit un header pour indiquer au serveur que la page est appellée en Ajax
xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest')
// On lance la requête
xhr.send()

// Pour suivre l'évolution de l'appel
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            xhr.responseText // contient le résultat de la page
        } else {
            // Le serveur a renvoyé un status d'erreur
        }
    }
}

// Pour soumettre des informations
var data = new FormData() 
data.append('name', 'John Doe')
data.append('email', 'contact@local.dev')

// On peut récupérer les infos à partir d'un formulaire
var form = document.querySelector('#form')
var data = new FormData(form) 

// On soumet les infos pour passer l'objet dans le send
var xhr = getHttpRequest()
xhr.open('POST', 'http://localhost/demo', true)
xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest')
xhr.send(data)

// On converti au format JSON pour l'utiliser dans les requêtes
var test = 'UN TRUC EN JSON'
var items = JSON.parse(test)