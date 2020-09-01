let order = [];
let clickeOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.azul');
const red = document.querySelector('.vermelho');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickeOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }
}


let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

     setTimeout(() => {
         element.classList.remove('selected');
     });  
}

let checkOrder = () => {
    for(let i in clickeOrder) {
        if(clickeOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickeOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nivel`)
        nextLevel();
    }
}

let click = (color) => {
    clickeOrder[clickeOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

let createColorElement = (color) => {
    if(color == 0 ){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shufflerOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em ok para iniciar um novo jogo`)
    order = [];
    clickeOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click',click(1) )
yellow.addEventListener('click',click(2) )
blue.addEventListener('click',click(3) )

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame();

