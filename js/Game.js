/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            'Broken heart',
            'When pigs fly',
            'Trade secrets', 
            'Frenemies',
            'Bermuda Triangle',
        ];
        this.activePhrase = 'null';
    }

    /** getRandomPhrase() function
     * uses Math.random() and Math.floor() method to get a random number which will be the index of the phrase used for the game
     * @returns a random phrase from this.phrases
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /** startGame() function
     * Removes the start screen overlay by setting the display to 'none'
     * calls the getRandomPhrase() method and sets the active phrase to the chosen phrase 
     * calls the addPhraseToDisplay() method of the Phrase class
     */
    startGame() {
        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = 'none';
        const randomPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }

    /** removeLife() function
     * changes the .src attribute of the img elements from 'liveHeart' to 'lostHeart'
     * tracks how incorrect guesses have been made and calls the gameOver() method when it reaches 5 incorrect guesses
     */
    removeLife() {
        const heartsImg = document.querySelectorAll('img');
        heartsImg[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver("You lost :(", "lose");
        }
    }

    /** checkForWin() function
     * checks if all the letters in the phrase have been selected by the user
     * does this by checking if the letter list elements contain the class "show" (added when the letter is selected)
     * @param {*} selectedLetters 
     * @returns boolean true or false 
     */
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

    /** gameOver() function
     * displays the start screen, modified to include a message to indicate if the player won or lost
     * resets the gameboard for when a new game is started 
     * @param {*} message 
     */
    gameOver(message, result) {

        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = '';
        startScreen.className = result;

        const h1 = document.querySelector('h1');
        h1.textContent = message;

        // Reseting all the DOM elements that were changed in the game
        const ul = document.querySelector('ul');
        ul.innerHTML = '';

        const heartsImg = document.querySelectorAll('img');
        heartsImg.forEach(img => {img.src = 'images/liveHeart.png'});
        
        const letterButtons = document.querySelectorAll('.key');
        letterButtons.forEach(letter => {letter.className = 'key'});
    }

    /** handleInteraction() function
     * disables the letter selected
     * calls checkLetter() method to see if the letter selected by the user matches a letter in the phrase
     * if checkLetter() returns true, the letter is added the class "chosen" and showMatchedLetter() method is called
     * checkForWin() is called and if it returns true, gameOver() is called with the win message as the argument
     * if checkLetter() returns false, the letter is added the class "wrong" and removeLife() method is called
     * @param {*} target 
     */
    handleInteraction(target) {
        const selectedLetters = [];

        const letterSelected = target.textContent;
        selectedLetters.push(letterSelected);

        if (this.activePhrase.checkLetter(letterSelected) === true) {
            target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterSelected);
            if (this.checkForWin(selectedLetters) === true) {
                this.gameOver("Congratulations, you won! :D", "win");
            } 
        } else {
            target.classList.add('wrong');
            if (!target.disable) {
                this.removeLife();
            }
        }
        
        target.disable = true;

        }

}