/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            'Speak of the devil',
            'When pigs fly',
            'Once in a blue moon', 
            'Elephant in the room',
            'Head in the clouds',
            'Bermuda Triangle',
        ];
        this.activePhrase = 'null';
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    startGame() {
        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = 'none';
        const randomPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }

    removeLife() {
        const heartsImg = document.querySelectorAll('img');
        heartsImg[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver("You lost :(")
        }
    }

    checkForWin(selectedLetters) {
        let win = false;
        let checkLetter = true;

        const letterLi = document.querySelectorAll('.letter');
        letterLi.forEach(letter => {
            if (!letter.classList.contains("show")) {
                checkLetter = false;
            }
        })
        
        if (checkLetter === true) {
            win = true;
        }

        return win
    }

    handleInteraction(target) {
        const selectedLetters = [];

        const letterSelected = target.textContent;
        selectedLetters.push(letterSelected);
        target.disable = true;
        if (this.activePhrase.checkLetter(letterSelected) === true) {
            target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterSelected);
            if (this.checkForWin(selectedLetters) === true) {
                this.gameOver("Congratulations, you won! :D")
            } 
        } else {
            target.classList.add('wrong');
            this.removeLife();
        }

        }

    gameOver(message) {

        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = '';

        const h1 = document.querySelector('h1')
        h1.textContent = message;

        // Reseting all the DOM elements that were changed in the game
        const ul = document.querySelector('ul')
        ul.innerHTML = '';

        const heartsImg = document.querySelectorAll('img');
        heartsImg.forEach(img => {img.src = 'images/liveHeart.png'});
        
        const letterButtons = document.querySelectorAll('.key');
        letterButtons.forEach(letter => {letter.className = 'key'});
    }

}
