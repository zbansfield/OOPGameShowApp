/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('.start');
const keyboardButtons = document.querySelector('#qwerty')

// Event listener to create a new Game class and call the .startGame() method when the start button is clicked
startButton.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game = new Game;
        game.startGame();
    }
})

// Event listener for the keyboard clicks, calls the .handleInteraction() method on the game
keyboardButtons.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})