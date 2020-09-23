# JavaScript Grafikart
## Partie 1 : PHP to JS
- Résumé : https://www.grafikart.fr/tutoriels/php-to-js-769

## Partie 2 : L'objet Windows
- Résumé : https://www.grafikart.fr/tutoriels/window-773
- Si on met le JS dans le head de la page : sensation de ralentissement de la page, le reste de la page de ne sera pas chargé avant

## Partie 3 : DOM
- Résumé : https://www.grafikart.fr/tutoriels/dom-774

## Partie 3 : Les évènements
- Résumé : https://www.grafikart.fr/tutoriels/events-775

## Partie 8 : Ajax
- Résumé : https://www.grafikart.fr/tutoriels/ajax-780

## Partie 9 : Lodash
- Site : https://lodash.com/
- Bibliothèque JS
- Sur chaque fiche technique des fonction on a accès :
    - Aux sources
    - Aux NPM packages

## Partie 15 : Carte interactive en SVG
- Quand on récupère un SVG, on peut l'analyser avec un logiciel (JavaScriptCarte interactive en SVG) pour comprendre son anatomie
- Chaque SVG est composé de formes particulières qui sont nommées (utilisés comme ID).
- Eviter les grosses cartes avec différents tracés, que prendre celles avec formes géométriques
- On peut déterminer via logiciel la taille de l'image svg pour l'utiliser dans le vieBox

## Partie 16 : Menu en vague
- Dynamic js permet de créer des animations entre plusieurs propriétés (autre : snap svg mais + complexe)
- Dynamic js permet de tester sur le site directement les animations et de générer le code à utiliser
- Affinity Designer pour créer le menu (payant), Inkscape
Analyse de création du SVG :
- Ne pas créer un rectangle, car en SVG ça va créer une forme (on veut une animation)

## Partie 17 : Web components
- Problématique :
Lorsque l'on fait du JS, c'est pour créer des éléments d'interface riches et pas très pratique de faire ça aujourd'hui.
<br>
Par exemple si on veut rajouter un nouveau champs du même type que celui modifié de base dans le js (ex: un champs avec date-picker), il faut lui ré appliquer le date-picker aussi => peu pratique
<br>
C'est pour cela que l'on peut utiliser des éléments personnalisés qui contenir sa propre logique, structure et automatiqueement les éléments serton greffés dessus.


## Points importants
- this en JS fait toujours référence au contexte parent
- On peut placer debugger dans le code JS pour debugger dans la console, grâce à cela on peut regarder pas à pas les valeurs au survol de chaque variable et éléments JS. 
- Les console.log() sont utiles mais attention lorsque, par exemple, on change les valeurs de variables d'un objet. Dans ce cas, afficher directement la variable de l'objet.
```JS
let a = {
    b: 2,
    c: 3
}
console.log(a);
console.log(a.c); // + précis, pas d'erreur
a.c = 5
/*
Ici le console.log(a) montrera 2 valeurs différentes de c dans la console :
1er cas : objet sérialisé qui renvoie les valeurs de l'objet au moment où le console.log() est appelé
{b: 2, c: 3}
2e cas : Quand on inspecte l'objet, révèle les valeurs au moment où on clique
b: 2
c: 5
/*
```
- Closure :
    - PHP : Classe utilisée pour créer des fonctions anonymes, fonction anonyme = Closure
    - JS : Fonction qui enferme une autre fonction et qui lui donne un contexte local
- Au début il faut essayer de décrire ce que l'on veut faire en commentaire. Si on passe par un "Lorsque l'on..." on utilise un évènement.

## Tips
### Documentation JavaScript
Il n'y a pas de documentation JS officielle mais par exemple sur les sites suivants :
- https://developer.mozilla.org/fr/docs/Web/JavaScript
- https://devdocs.io/javascript/
Pour appeler le site pour recevoir des JSON : https://jsonplaceholder.typicode.com/

#### Notes sur les instructions du site
- On peut y trouver les objets natifs et leurs fonctions
- "prototype" s'utilise sur l'instance
- On peut trouver des "shim" qui sont des morceaux de code à implémenter avant le javascript afin que les navigateurs qui n'utilisent pas normalement les fonctions que l'on souahite en JS, puissent le faire