/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        const phraseSplit = this.phrase.split('');
        phraseSplit.forEach(letter => {
            let li = document.createElement('li');
            if (letter.match(/[a-z]/i)) {
                li.classList = `hide letter ${letter}`;
                li.textContent = letter
            } else {
                li.className = "space";
                li.textContent = " ";
            }
            ul.appendChild(li);
        })
     }

     checkLetter(letterSelected) {
        let isIn = false;
        const phraseSplit = this.phrase.split('')
        phraseSplit.forEach(letter => {
            if (letter === letterSelected) {
                isIn = true
            }
        })
        return isIn
    }

    showMatchedLetter(matchedLetter) {
        const letterLi = document.querySelectorAll(`.letter.${matchedLetter}`);
        letterLi.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
        })
    }
}

/**Quality Control checks -to delete before submitting-
 * checking if methods inside classes work properly 
 * checking that class creates objects properly
 */
