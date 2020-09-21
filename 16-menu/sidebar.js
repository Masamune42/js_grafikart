(function () {
    let path = document.querySelector('#sidebar-wave path');
    let sidebarLinks = document.querySelectorAll('.sidebar a');
    let from = path.getAttribute('d');
    // dataset -> permet de récupérer tous les attributs avec 'data-*'
    let to = path.dataset['to']
    let options = {
        type: dynamics.easeOut,
        duration: 450,
        friction: 450
    };

    // Variable qui détecte si le menu est ouvert (de base false)
    let sidebarOpened = false
    let button = document.querySelector('#menu')
    // Quand on click sur le bouton du menu
    button.addEventListener('click', function (e) {
        // Lorsque l'on click sur le bouton du menu, on ne détecte pas que l'on click sur le body
        e.stopPropagation()
        e.preventDefault()
        // Animation dynamicsjs
        dynamics.animate(path, {
            d: to
        }, options)
        sidebarLinks.forEach(function (link, i) {
            dynamics.animate(link, {
                translateX: 0
            },
                // On reprend les options (param2) que l'on place dans un objet vide (param1) en ajoutant un delay (param3) plus important à chaque tour de boucle
                Object.assign({}, options, { delay: 50 * i, duration: 300 }))
        })
        document.body.classList.add('has-sidebar')
        sidebarOpened = true
    })

    document.body.addEventListener('click', function () {
        if (sidebarOpened) {
            // Animation dynamicsjs
            dynamics.animate(path, {
                d: from
            }, options)
            sidebarLinks.forEach(function (link, i) {
                dynamics.animate(link, {
                    translateX: 200
                }, Object.assign({}, options))
            })
            document.body.classList.remove('has-sidebar')
        }
    })
})()