// MODELE DE BASE
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((data) => console.log(data))

// Fonction async qui affiche les données users
const getUsers = async function () {
    // try/catch qui vérifie si on essaye de contacter quelque chose qui n'existe pas
    try {
        // On récupère la réponse via une promesse
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Si la réponse renvoie quelque chose
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        } else { // Si la réponse échoue
            console.error('Retour du seveur : ', response.status);
        }
    } catch (e) { // Si la page n'existe pas (domaine / impossible d'accéder)
        console.log(e);
    }

}

const insertPost = async function (data) {
    // 2e paramètre : objet
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // méthode d'envoi
        headers: { // entête, type de données envoyées
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data) // Envoi des données sous forme de string avec stringify
    })
    let responseData = await response.json();
    console.log(responseData);
}

getUsers()
insertPost({
    name: 'Jean',
    age: 29
})