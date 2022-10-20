"use strict";
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team



const team = [
    {
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Loperz',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const container = document.getElementById('card-container');

for (let value of team) {
    for (let key in value) {
        console.log(value[key]);
        // console.log(key);
    }
    addCard(value);
}


function addCard(obj) {
    obj.nome;
    obj.role;
    obj.image;
    
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card shadow-sm';

    const image = document.createElement('img');
    image.className = 'bd-placeholder-img card-img-top';
    image.src = './img/' + obj.image;

    const cardText = document.createElement('div')
    cardText.className = 'card-body text-center'

    const pNome = document.createElement('p');
    pNome.classList = 'card-text fs-3';
    pNome.innerHTML = obj.nome;

    const pRole = document.createElement('p');
    pRole.classList = 'card-text';
    pRole.innerHTML = obj.role;

    container.appendChild(col);
    col.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardText);
    cardText.appendChild(pNome);
    cardText.appendChild(pRole);



    
}






// while (i < team.length) {

//     card.innerHTML = `
//         <img src="./img/wayne-barnett-founder-ceo.jpg" alt="" class="bd-placeholder-img card-img-top">
//         <div class="card-body text-center">
//             <p class="card-text fs-3">Wayne Barnett</p>
//             <p class="card-text">Founder & CEO</p>
//         </div>
//         `;
//     col.append(card);

//     i++
// }
// containerCard.append(col)

