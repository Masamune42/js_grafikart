// Ici c'est du code JS !
// BASES :
// 1.
// ; non obligatoire, compris par JS
// comprend une déclaration sans var mais conseillé de le mettre
// n'interprète pas les variables entre ""
// pas possible de faire un saut de ligne comme en php, mettre en \n
var nom = "aze\n";
// Une variable non déclarée et testée sera undefined

// 2.
// "1" + 1 = 11 (considère comme un string)
// "1" * 1 = 1 (considère comme un int)

// 3.
var tab = [1, 2, '23'];
tab[0];
// Pas de tableau associatif en JS, mais les objets existent (pas de notion d'instances)
// Se rapproche du stdClass() du PHP (classe éphémère) qui n'est jamais utilisé
var eleve = {
    nom: 'Jean',
    moyenne: [1, 5]
}
// La plus utilisé normalement
eleve.moyenne[0];
// La moins utilisé sauf si utilisation d'un indice comme ci-dessous
var indice = "nom";
eleve[indice];

// 4.
if (1) {

} else if (1) {

} else {

}
// Idem PHP : switch case (peu utilisé), conditions ternaires

// 6.
for (var i = 0; i < 3; i++) {
    break
}

// 7.
for (var i = 0; i < tab.length; i++) {

}

// 8.
// Maintenant moins utilisé
function demo() {
}

// fonction anonyme plus utilisé
// On ne peut pas mettre de valeur par défaut pour les paramètres
var demo = function (a, b) {
    if (b == undefined) {
        b == 2;
    }
}

// Si appelé tel quel, b = undefined
demo(1);

// 9
// Tous les types de base sont des objets
nom.toUpperCase();

// Même les tableaux ont des méthodes
var a = [1, 2, 4].push(4); // a = [1, 2, 4, 3]

a.join(', ');
// Comme en PHP, les fonctions peuvent modifier les objets

// 10
// Une variable déclarée dans une boucle, condition est accessible partout même en dehors
// Mais une valeur déclarée dans une fonction n'est pas accessible en dehors
b = 3;
c = 1;
// Possible, car la fonction peut avoir accès à la variable en dehors de la fonction
var demo2 = function () {
    // La valeur de c définie ici n'est valable que dans la fonction
    // Sans le var, on modifie directement la variable globale
    var c = 3;
    c = 5;
    return 3 * b;
}

demo2() // vaut 9;
c // vaut 1

// CLASSES
// 1.
var eleve = {
    nom: "Eleve",
    moyenne: function () {
        return 10
    },
    present: function () {
        return this.nom + " present"
    }
}

var jean = Object.create(eleve);
jean.nom // retourne "Eleve", c'est le prototype
jean.nom = "Jean";
jean.nom // retourne "Jean"

// Définition d'une fonction sur une instance
jean.parler = function () { return 'Salut'; }

// Modifier le prototype d'une fonction existante
eleve.present = function () { return "Salut"; }

// En JS, on peut construire des objets via une méthode
// Il faut créer une fonction
// Construteur avec un prototype avec méthodes
// Plus utilisé
var Eleve = function (nom) {
    this.nom = nom;
}

// Ajout d'une méthode en prototype pouvant évoluer ex: ajouter "parler"
Eleve.prototype.moyenne = function () {
    return 10;
}

var marc = new Eleve('Marc'); // variable d'instance de type Eleve, avec un nom : Marc

"1".__proto__ // Affiche toutes les fonctions en prototype pour un string

// Ajout à toutes les string une méthode prototype
String.prototype.test = function () { return this + "test" }

// 2. 
var Session = {
    get: function () {

    }
};

Session.get();

// 3. 
// Très peu utilisé car complexe
Eleve.prototype.present = function () {
    return this.nom + " présent !";
}

var Delegue = function (nom) {
    Eleve.call(this, nom); // constructeur qui utilise un autre système / extends
    this.role = "delegue";
}

// On rajoute au prototype de Delegue, le prototype de Eleve
Delegue.prototype = Object.create(Eleve.prototype);
// Redéfinition du constructeur sur Delegue, car les propriétés de Eleve l'ont écrasé
Delegue.prototype.constructor = Delegue;

Delegue.prototype.moyenne = function () {
    return 15;
}

var pierre = new Delegue('Pierre');

// Appelle de fonction
pierre
// Delegue avec les propriétés : nom et role
// Dans le prototype de Delegue : constructeur et moyenne
// Qui a comme prototype Eleve qui a les méthodes : moyenne et present

pierre.moyenne()
// Est-ce que pierre a la méthode moyenne? Non.
// On regarde donc sur le prototype : Oui

pierre.present()
// Est-ce que pierre a la méthode moyenne? Non.
// On regarde donc sur le prototype : Non
// On regarde sur le prototype du prototype : Oui

// FOREACH
// 
Eleve.prototype.moyenne = function () {
    var somme = 0;

    this.notes.forEach(function(note) {
        somme += note;
    })
    // Equivalent
    // for (var i = 0; i < this.notes.length; i++) {
    //     somme += this.notes[i];
    // }
    return Math.round(somme / this.notes.length);
}

jean.notes = [10, 12];
jean.moyenne() // 11

