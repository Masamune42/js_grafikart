// On choisi un chiffre RANDOM
var aDeviner = Math.round(Math.random() * 10);
var essais = 3;
console.log(aDeviner);

// SOLUTION 1
/* var essai = window.prompt('Entrez votre chiffre');
console.log(aDeviner);

essai = parseInt(essai, 10);
while (essai != aDeviner && essais > 0) {
    essais--;
    if (essai > aDeviner) {
        alert('Au dessus !');
    } else {
        alert('En dessous !');
    }
    if (essais > 0)
        essai = window.prompt('Retentez votre chance');
}

if (essai == aDeviner)
    alert('Bravo');
else
    alert('Echec') */

// SOLUTION 2
var essai;
for (var i = 0; i < 3; i++) {
    if (i == 0)
        essai = prompt('Entrez votre chiffre');
    else
        essai = prompt('Retentez votre chance')
    essai = parseInt(essai);
    if (essai == aDeviner) {
        break
    } else if (essai > aDeviner) {
        alert('Trop haut !')
    } else {
        alert('Trop bas !')
    }
}
if (essai == aDeviner)
    alert('Bravo');
else
    alert('Echec')