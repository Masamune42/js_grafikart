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