// const inputs = document.querySelectorAll('.js-datepicker').forEach(function (input) {
//     flatpickr(input);
// })
import secondTimer from './components/secondTimer.js'

import datePicker from './components/Datepicker.js'

import MyButton from './components/MyButton.js'

// On défini un nom à l'élément (avec un tiret) avec la class que l'on utilise
customElements.define('second-timer', secondTimer)
customElements.define('my-button', MyButton)
// Ce n'est pas un custom Element mais il va utiliser l'attribut is, dans ce cas on lui indique en 3e paramètre de que émément HTML il étend
// De cette façon, on défini que tous les input qui ont is="date-picker" auront la class datePicker
customElements.define('date-picker', datePicker, { extends: 'input' })

document.querySelector('#add').addEventListener('click', function () {
    // document.body.appendChild(new secondTimer)
    // document.body.innerHTML = `<div>
    // <class="container"><second-timer></second-timer></div>
    // `
    document.querySelector('.form-group').appendChild(new datePicker())
})