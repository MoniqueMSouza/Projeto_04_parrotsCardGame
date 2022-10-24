let card = []; //isso é o 'armário' de cartas;




//pergunta ao usuário com quantas cartas ele quer jogar!
    const numeroCartas = parseInt(prompt("Quantas cartas você deseja jogar? De 4 a 14."));    
    //quando o numero de cartas for menor que 4 ou maior que 14 ou não for um número, ou for ímpar, repita a pergunta!
    while(numeroCartas < 4 || numeroCartas > 14 || isNaN(numeroCartas) || (numeroCartas % 2) === 1) {
        numeroCartas = parseInt(prompt("Quantas cartas você deseja jogar? De 4 a 14."));
   
    }



    


//colocar cartas na tela de acordo com o valor inserido pelo usuario
    const grid = document.querySelector('ul');


    contador = 0;

while(numeroCartas > contador){
    grid.innerHTML += `
    <li class="card" onclick="VirarCarta(this)">
    <div class='face front'>
    <img src= "arquivos/${card[contador]}.gif"/>
    </div>
    <div class='face back'>
    </div>
    </li>
    `;
    contador++;
}


function GerarCartasSortidas() {
    const nomes = [
        'bobrossparrot',
        'explodyparrot',
        'fiestaparrot',
        'metalparrot',
        'revertitparrot',
        'tripletsparrot',
        'unicornparrot',
    ];

   card = [];
    
    for(let i = 0; i < (numeroCartas/2); i++) {

        const selecionados = nomes[i];

        card.push(selecionados);
        card.push(selecionados);
    }
        
        card.sort(comparador); 
        return card;
                  
    }
    

    console.log(card);
    
      function comparador() { 
        return Math.random() - 0.5; 
    }

let contadorCliques = 0 // 
function VirarCarta(card){
    card.classList.add('reveal-card');    
    contadorCliques++;
}




    


    /*const loadGame = () =>{


        const duplicatecharacters=[...characters, ...characters];
    
    
    
        const embaralhar = duplicatecharacters.sort(() => Math.random() - 0.5);
    
        embaralhar.forEach((character) => {
    
    const card = createCard(character);
    disposicaoCartas.appendChild(card);
    
        });
    }
    loadGame();*/




/* const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

    }

let firstCard = '';
let SecondCard= '';


const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if(disabledCards.length === 14) {
        alert('Você ganhou em X jogadas!');
    }

}


const checkCards = () =>{
const firstCharacter = firstCard.getAttribute('data-character');
const SecondCharacter = SecondCard.getAttribute('data-character');

if (firstCharacter === SecondCharacter){

    firstCard.firstChild.classList.add('disabled-card');
    SecondCard.firstChild.classList.add('disabled-card');

    firstCard ='';
    SecondCard ='';


    checkEndGame ();

} else { 
    setTimeout(() => {
    firstCard.classList.remove('reveal-card');
    SecondCard.classList.remove('reveal-card');

    firstCard ='';
    SecondCard ='';

    }, 1000);


}
}

    const revealCard = ({ target }) =>{

if (firstCard === ''){
    target.parentNode.classList.add('reveal-card')
    firstCard= target.parentNode;
}
else if(SecondCard === ''){
    target.parentNode.classList.add('reveal-card')
    SecondCard= target.parentNode;

    checkCards();

}



    }

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

front.style.backgroundImage=`url('arquivos/${character}.gif')`;

    card.appendChild(front);    
    card.appendChild(back);



    card.addEventListener ('click', revealCard);
card.setAttribute('data-character', character);

    return card; 

}

const loadGame = () =>{


    const duplicatecharacters=[...characters, ...characters];



    const embaralhar = duplicatecharacters.sort(() => Math.random() - 0.5);

    embaralhar.forEach((character) => {

const card = createCard(character);
disposicaoCartas.appendChild(card);

    });
}
loadGame();*/