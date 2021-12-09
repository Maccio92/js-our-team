/* In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.*/

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
  ];

// Creo la variabile container dove inserire le card
let container = document.querySelector('.team-container');

// Creo la funzione per creare le card
function teamCard(){
  for (let i = 0; i < team.length; i++) {
    let object = team[i];
    let card =`<div class="team-card">
                  <div class="card-image">
                    <img src="${object.image}" alt="${object.name}">
                  </div>
                  <div class="card-text">
                    <h3>${object.name}</h3>
                    <p>${object.role}</p>
                  </div>
                </div>`;
                container.innerHTML += card;
  }
}
// Richiamo la funzione 
teamCard(team, container);

