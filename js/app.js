/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('.start');
const keyboardButtons = document.querySelector('#qwerty')

startButton.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game = new Game;
        game.startGame();
    }
})

keyboardButtons.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})