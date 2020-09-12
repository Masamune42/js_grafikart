// On récupère le formulaire de contact
var form = document.querySelector('#contact');
// On récupère le bouton de submit
var button = form.querySelector('button[type=submit]');
// On sauvegarde le texte du bouton
buttonText = button.textContent;
form.addEventListener('submit', function (e) {
    // On désactive le bouton
    button.disabled = true;
    // On change le texte du bouton
    button.textContent = 'Chargement...';
    // On récupère tous les éléments qui sont en erreurs (Il y en a que si le formulaire a déjà été soumis)
    var ErrorElements = form.querySelectorAll('.has-error');
    for (let i = 0; i < ErrorElements.length; i++) {
        // On retire la class Bootstrap
        ErrorElements[i].classList.remove('has-error');
        // On sélectionne le span avec le message d'erreur
        var span = ErrorElements[i].querySelector('.help-block')
        // S'il existe, on le retire
        if (span) {
            span.parentNode.removeChild(span);
        }
    }
    e.preventDefault();
    // Envoi des données
    var data = new FormData(form);
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // Si la statut est différent de 200, on récupère la réponse texte
            if (xhr.status !== 200) {
                var errors = JSON.parse(xhr.responseText);
                // On récupère les clés des erreurs retournées
                var errorsKey = Object.keys(errors);
                // Pour chaque clé d'erreur
                for (let i = 0; i < errorsKey.length; i++) {
                    var key = errorsKey[i];
                    // On récupère l'erreur du tableau errors grace à la clé
                    var error = errors[key];
                    // On récupère l'élément qui la clé comme name
                    var input = document.querySelector('[name= ' + key + ']');
                    // On crée un span
                    var span = document.createElement('span');
                    span.className = 'help-block';
                    // On indique l'erreur à afficher
                    span.innerHTML = error;
                    // On rajoute la class has-error à l'élément parent form-group pour indiquer l'erreur sur le champs
                    input.parentNode.classList.add('has-error');
                    input.parentNode.appendChild(span);
                }
            } else {
                var results = JSON.parse(xhr.responseText);
                alert(results.success);
                var inputs = form.querySelectorAll('input, textarea');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = "";
                }
            }
            // On réactive le bouton
            button.disabled = false;
            button.textContent = buttonText;
        }
    }
    xhr.open('POST', form.getAttribute('action'), true)
    // Header pour l'AJAX
    xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest')
    // Envoi des données
    xhr.send(data)
})