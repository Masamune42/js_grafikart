// On récupère le formulaire de contact
let form = document.querySelector('#contact');
// On récupère le bouton de submit
let button = form.querySelector('button[type=submit]');
// On sauvegarde le texte du bouton
buttonText = button.textContent;
form.addEventListener('submit', async function (e) {
    // On désactive le bouton
    button.disabled = true;
    // On change le texte du bouton
    button.textContent = 'Chargement...';
    // On récupère tous les éléments qui sont en erreurs (Il y en a que si le formulaire a déjà été soumis)
    let ErrorElements = form.querySelectorAll('.has-error');
    for (let i = 0; i < ErrorElements.length; i++) {
        // On retire la class Bootstrap
        ErrorElements[i].classList.remove('has-error');
        // On sélectionne le span avec le message d'erreur
        let span = ErrorElements[i].querySelector('.help-block')
        // S'il existe, on le retire
        if (span) {
            span.parentNode.removeChild(span);
        }
    }
    e.preventDefault();
    // Envoi des données
    let data = new FormData(form);
    /* ICI NOUVEAU CODE */
    // Si on a une erreur : lien du POST n'existe pas...
    try {
        // On attend la réponse du serveur avec les infos suivantes
        // 1er paramètre : on récupère là où on veut envoyer le formulaire : action du form
        // 2e paramètre : le format des données avec le corps body : data -> données à envoyer
        let response = await fetch(form.getAttribute('action'), {
            method: 'POST',
            headers: {
                'X-Requested-With': 'xmlhttprequest'
            },
            body: data
        })
        // On récupère la réponse du serveur en json
        // "Bravo !" envoyé dans post_contact si ok
        // Description de l'erreur sinon
        let responseData = await response.json()
        // Si la réponse n'est pas ok -> formulaire pas envoyé, champs non remplis
        if (response.ok === false) {
            // Définition des erreurs
            let errors = responseData;
            console.log(errors);
            // On récupère les clés des erreurs retournées
            let errorsKey = Object.keys(errors);
            // Pour chaque clé d'erreur
            for (let i = 0; i < errorsKey.length; i++) {
                let key = errorsKey[i];
                // On récupère l'erreur du tableau errors grace à la clé
                let error = errors[key];
                // On récupère l'élément qui la clé comme name
                let input = document.querySelector('[name= ' + key + ']');
                // On crée un span
                let span = document.createElement('span');
                span.className = 'help-block';
                // On indique l'erreur à afficher
                span.innerHTML = error;
                // On rajoute la class has-error à l'élément parent form-group pour indiquer l'erreur sur le champs
                input.parentNode.classList.add('has-error');
                input.parentNode.appendChild(span);
            }
        } else { // Sinon, envoi du formulaire, tout est ok
            let inputs = form.querySelectorAll('input, textarea');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
            console.log(responseData.success);
        }
    } catch (e) {
        alert(e);
    }
    // On réactive le bouton
    button.disabled = false;
    button.textContent = buttonText;
})