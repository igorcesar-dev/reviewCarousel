const reviews = [
    {
        id: 1,
        name: "Willard Carroll Smith Jr",
        job: "Ator, rapper, e produtor de cinema americano",
        img: "https://see.news/wp-content/uploads/2020/11/Will-Smith.jpg",
        text: "WWill Smith é vencedor de quatro prêmios Grammy e já lançou onze álbuns, sendo os seis primeiros ainda como The Fresh Prince, com o DJ Jazzy Jeff, e os cinco últimos, solo. Participou de 21 filmes, seja como dublador (Shark Tale), narrador (A Closer Walk) ou produtor.",
    },
    {
        id: 2,
        name: "Tyler James Williams",
        job: "Ator",
        img: "https://mediamass.net/jdd/public/documents/celebrities/4761.jpg",
        text: "Tyler James Williams é um ator, dublador e rapper estadunidense. Ele ficou mais conhecido por interpretar o personagem-título, inspirado em Chris Rock, na série de televisão Everybody Hates Chris, e Noah, na série The Walking Dead.",
    },
    {
        id: 3,
        name: "Paul Walker",
        job: "Ator",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMiSOpPSw2BBtVkX7bbcIXe5ejb8UtxDYjsoaVs1-rMhmdRA9QSPc-h2FIcQQfZmiSnY&usqp=CAU",
        text: "Hi guys? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
];

// Constantes para pegar informações dos arrays;
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Constantes para pegar as classes no html;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//  Seleciona o primeiro item;
let currentItem = 0;

// Carega o primeiro item;
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

// Função para mostrar a pessoa com as informações;
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Muda para a próxima pessoa;
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Muda para a pessoa anterior;
prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Botão para selecionar as pessoas de forma aleatória;
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});