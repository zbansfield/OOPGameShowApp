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
        const heartsImg = document.querySelector('img');
        heartsImg.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin(selectedLetters) {
        let win = false;
        let checkLetter = true;
        
        // const phraseArr = this.activePhrase.phrase.split("");
        // let withoutSpace = phraseArr.filter(phrase => phrase != " ")
        
        // withoutSpace.forEach(letter => {     
        //     if (!selectedLetters.includes(letter)) {
        //         checkLetter = false;
        //     }
        // })

        // if (checkLetter) {
        //     win = true
        // }

        const letterLi = document.querySelectorAll('.letter');
        letterLi.forEach(letter => {
            if (!letter.classList.includes("show")) {
                checkLetter = false;
            }
        })


        return win
    }

    handleInteraction(target) {
        const letterButtons = document.querySelector('#qwerty');
        const selectedLetters = [];

        const letterSelected = target.textContent;
        selectedLetters.push(letterSelected);
        target.disable = true;
        if (this.activePhrase.checkLetter(letterSelected) === true) {
            target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterSelected);
            if (this.checkForWin(selectedLetters) === true) {
                this.gameOver()
            } 
        } else {
            target.classList.add('wrong');
            this.removeLife();
        }

        }

    gameOver() {
        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = '';
        const h1 = document.querySelector('h1')
        this.checkForWin ? h1.textContent = 'Yay! You won!' : h1.textContent = 'Better luck next time buddy';
    // to do: in gameover screen reset all the inner HTML's
    }

}
