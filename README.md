# JavaScript Grafikart
## Partie 1 : PHP to JS
- Résumé : https://www.grafikart.fr/tutoriels/php-to-js-769

## Partie 2 : L'objet Windows
- Résumé : https://www.grafikart.fr/tutoriels/window-773
- Si on met le JS dans le head de la page : sensation de ralentissement de la page, le reste de la page de ne sera pas chargé avant


## Points importants
- this en JS fait toujours référence au contexte parent
- On peut placer debugger dans le code JS pour debugger dans la console
- Closure :
    - PHP : Classe utilisée pour créer des fonctions anonymes, fonction anonyme = Closure
    - JS : Fonction qui enferme une autre fonction et qui lui donne un contexte local

## Tips
### Documentation JavaScript
Il n'y a pas de documentation JS officielle mais par exemple sur les sites suivants :
- https://developer.mozilla.org/fr/docs/Web/JavaScript
- https://devdocs.io/javascript/

#### Notes sur les instructions du site
- On peut y trouver les objets natifs et leurs fonctions
- "prototype" s'utilise sur l'instance
- On peut trouver des "shim" qui sont des morceaux de code à implémenter avant le javascript afin que les navigateurs qui n'utilisent pas normalement les fonctions que l'on souahite en JS, puissent le faire