var ps = document.querySelectorAll('p');

var liens = document.querySelectorAll('a.external');

for (var i = 0; i < liens.length; i++) {
    var lien = liens[i];
    lien.addEventListener('click', function (e) {
        // permet de stoper la propagation de l'event = cliquer dans le a, dans le p ne déclenche pas l'event du p
        e.stopPropagation();
        var reponse = window.confirm('Voulez-vous vraiment quitter le site?');
        if (reponse == false) {
            e.preventDefault();
        }
        // console.log(e);
    })
}

// this fait référence à l'élément sur lequel l'évènement est déclenché
for (var i = 0; i < ps.length; i++) {
    var p = ps[i];
    var rougit = function () {
        this.classList.toggle('blue');
    }
    p.addEventListener('mouseover', function () {
        this.classList.add('blue');
    });

    p.addEventListener('click', function () {
        this.classList.toggle('green');
    });

    p.addEventListener('mouseout', function () {
        this.classList.remove('blue');
    });
}

// Permet d'ajouter un event listener sur p et ensuite l'enlever une fois exécuté
var s = document.querySelector('p.onclick');
var onClick = function (e) {
    this.classList.add('red');
    console.log('Rouge');
    s.removeEventListener('click', onClick);
}

s.addEventListener('click', onClick);

// Empêche l'utilisateur d'écrire des lettres non voulues
document.querySelector('#a').addEventListener('keydown', function (e) {
    // OLD
    // var lettre = String.fromCharCode(e.keyCode);
    // NEW
    var lettre = e.key;

    if (lettre != "a") {
        e.preventDefault();
    }
})

var cp = document.querySelector('#cp');
// Focus sur le champs lors du chargement de la page
cp.focus();

// Vérification d'un formulaire avant soumission
document.querySelector('#form').addEventListener('submit', function (e) {
    var mentions = document.querySelector('#mentions');
    var age = parseInt(document.querySelector('#age').value, 10);
    
    
    // Si la taille du cp est différent de 5
    if (cp.value.length != 5) {
        alert('Le code postal n\'est pas bon !');
        e.preventDefault();
    }
    // Si la taille la checkbox est cochée
    if (!mentions.checked) {
        alert('Vous n\'avez pas accepté les CGU!');
        e.preventDefault();
    }
    // Vérifie si le select contient un chiffre supérieur à 18
    if(age < 18)
    {
        alert('Vous ne pouvez pas entrer !');
        e.preventDefault();
    }
})