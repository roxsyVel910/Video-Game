const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame)

function startGame() {
    game.fillReact(0,0,100,100);
    game.fillClear(0,0,50,50);

}