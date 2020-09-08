// On a accès à la variable document qui correspond à la page html (entre balises)
var demo = document.getElementById('demo');

var p = document.querySelector('.paragraph');

var ps = document.querySelectorAll('p');

// Au bout de 1s ajout la couleur blue au paragraphe sélectionné puis la retire alternativement
// window.setInterval(function () {
//     p.classList.toggle("blue")
// }, 1000)

// Au bout de 1s ajout la couleur blue à tous les paragraphes sélectionné puis la retire alternativement
// for (var i = 0; i < ps.length; i++) {
//     (function (p) {
//         window.setInterval(function () {
//             p.classList.toggle("blue")
//         }, 1000)
//     })(ps[i])
// }

var li = document.querySelector('li');