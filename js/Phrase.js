/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /** addPhraseToDisplay() function
     * adds the phrase to the display by appending list elements for each letter in the phrase to the ul element 
     * for spaces in the phrase, the class name "space" is given to the list element
     */
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

    /** checkLetter() function
     * checks if the letter selected is in the phrase
     * @param {*} letterSelected 
     * @returns boolean true or false
     */
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

    /** showMatchedLetter() function
     * removes the "hide" class name and adds the "show" class name to the list element of the matched letters 
     * @param {*} matchedLetter 
     */
    showMatchedLetter(matchedLetter) {
        const letterLi = document.querySelectorAll(`.letter.${matchedLetter}`);
        letterLi.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
        })
    }
}