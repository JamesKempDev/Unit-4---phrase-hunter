class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null
    }

    createPhrases(){
        const phrases = [
            new Phrase('Life is like a box of chocolates'),
            new Phrase('There is no trying'),
            new Phrase('May the force be with you'),
            new Phrase('You have to see the matrix for yourself'),
            new Phrase('You talking to me')
        ];

        return phrases
    }

    getRandomPhrase() {

        // retuan a pharse object to the active phrase in lower case

        const phraseIndex = parseInt(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[phraseIndex].phrase.toLowerCase())
    }

    startGame() {
        // hide start screen overlay and get initial phrase
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {

        // get the active letter from the passed in target
        let letter = button.innerHTML;

        // assign correct class to button based on corret or wrong choice

        if (this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            button.setAttribute('class', 'chosen');
            button.disabled = true;
            if (this.checkForWin()){
                this.gameOver(this.checkForWin);
            }
        } else {
            button.setAttribute('class', 'wrong');
            button.disabled = true;
            this.removeLife();
        }
    }

    checkForWin() {

        // check if the number of matching letters is the same as the length of the phrase for a win / lose

        const matchingLetters = document.getElementsByClassName('show');
        const phraseLength = this.activePhrase.phrase.replace(/\s+/g, "").length;
        return matchingLetters.length == phraseLength
    }

    removeLife() {

        // return all of the hearts in a list

        let list = document.querySelectorAll('.tries');

        // switch heart to lost if the game isn't won or lost

        if (this.missed == 4) {
            let currentPos = 4 - this.missed;
            list[currentPos].getElementsByTagName('img')[0].src = 'images/lostHeart.png';
            this.gameOver(this.checkForWin());
        } else {
            let currentPos = 4 - this.missed;
            list[currentPos].getElementsByTagName('img')[0].src = 'images/lostHeart.png';
            this.missed += 1;
        }
    }

    gameOver(gameWon) {

        // handle win or lose depending on the game over state

        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = '';

        if(gameWon){
            document.querySelector("#game-over-message").innerHTML="You won!";
            startScreen.className = 'win';
        } else {
            document.querySelector("#game-over-message").innerHTML="You lost";
            startScreen.className = 'lose';
        }

    }
}