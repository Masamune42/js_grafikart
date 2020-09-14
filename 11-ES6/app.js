// Déclaration d'une variable locale (fonction, boucle)
let test = "salut"

// Déclaration d'une constante
const PI = 3.1415

// AVANT
['Jean', 'Marc', 'Francine'].forEach(function (v) {
    console.log(v);
})
// ES6
['Jean', 'Marc', 'Francine'].forEach(v => console.log(v));
// Avec plusieurs paramètres (ici la clé)
['Jean', 'Marc', 'Francine'].forEach((v, k) => console.log(v, k));
// Avec plusieurs instructions
['Jean', 'Marc', 'Francine'].forEach((v, k) => {
    k = k * 2;
    console.log(v, k)
});

// AVANT
var classe = {
    eleves: ['Jean', 'Marc', 'Francine'],
    nom: 'CM2',
    afficherEleves: function () {
        var self = this;
        this.eleves.forEach(function (v) {
            console.log(self.nom); // this ici = contexte de la fonction
        })
    }
}
// ES6
var classe = {
    eleves: ['Jean', 'Marc', 'Francine'],
    nom: 'CM2',
    afficherEleves() {
        this.eleves.forEach((v) => {
            console.log(this.nom); // this ici = contexte parent
        })
    }
}
classe.afficherEleves();

// AVANT
console.log(classe.eleves.map(function (v) {
    return 'Mr' + v
}));
// ES6
console.log(classe.eleves.map((v) => 'Mr' + v));

// CLASSES
class Classe {
    // name => valeur par défaut
    // ...eleves => spread operator : tableau qui va prendre automatiquement tous les éléments passés après
    constructor(name = 'CM2', ...eleves) {
        this.eleves = eleves
        this.nom = name

    }

    afficherEleves() {
        console.log(`Les élèves de la classe :' + ${this.nom}`); // backquote pour interpoler des variables dans une chaine
        this.eleves.forEach((v) => {
            console.log(v); // this ici = contexte parent
        })
    }
}

let c = new Classe('CM1', 'Jean', 'Marc', 'Francine', 'Paul');
c.afficherEleves();

// Tableaux
let a = [1, 2, 3]
let [c, d, j] = a
// Equivalent à :
// var c = a[0],
//     d = a[1],
//     j = a[2];

let tab1 = ['Fiddlesticks', 'Ahri'];
let tab2 = ['Lux', 'Shyvana', ...tab1]; // On utilise le spread pour passer les éléments d'un tableau dans un tableau
console.log(tab2)
// Possible aussi comme ceci
let c = new Classe('CM1', ...tab2);

// Avec une chaine de caractères
let string = "azerty";
let c = new Classe('CM1', ...string); // Envoie de chaque caractère de la chaine

let chaine = `C'est une phrase
multiligne`;

// Héritage
class Classe2 extends Classe {
    constructor(name = 'CM2', ...eleves) {
        super(name, ...eleves);
        this.nom = `Classe2 ${name}`;
    }
    demo() {
        console.log('demo');
        this.afficherEleves();
    }
}

// Méthodes
let chaine = "zaezezaezateemodzaerzareza";
console.log(chaine.includes('teemo')); // test si teemo existe dans la chaine

let tab = ['Fiddlesticks', 'Ahri', 'Heimerdinger'];
console.log(chaine.includes('Ahri')); // test si ahri existe dans le tableau

// Promesses
function startTimer(duration = 1000) {
    return new Promise((resolve, reject) => { // fonction à renvoyer en cas de résolution et l'autre en cas d'échec
        setTimeout(() => resolve(`Fin du timer ${duration / 1000}s`), duration)
        // setTimeout(() => reject(`Fin du timer ${duration / 1000}s`), duration * 2)
    })
}

startTimer(1500)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log('échec' + msg)); // capture le reject si déclaré