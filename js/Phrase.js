class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');

        // Select the pharse element and add new li elements into it based on the length of the string
        // and its value

        for (let i = 0; i < this.phrase.length; i++) {
                if (this.phrase[i] === " "){
                    const li = document.createElement('li')
                    let spaceClass = 'space';
                    li.className = spaceClass;
                    li.innerHTML=" ";
                    ul.append(li);
                } else {
                    const li = document.createElement('li')
                    let hideLetterClass = `hide letter ${this.phrase[i]}`;
                    li.className = hideLetterClass;
                    li.innerHTML=`${this.phrase[i]}`;
                    ul.append(li);
                }
        }
    }

    checkLetter(letter){

        // iterate through the phrase confirming if the guessed letter is in the phrase or not

        for (let i=0; i< this.phrase.length; i++){
            if (this.phrase[i] === letter){
                return true
            } else {
                continue
            }
        }
        return false
    }

    showMatchedLetter(letter){

        // set match to the correct html and select all of the matched letters

        let match = `.hide.letter.${letter}`
        let result = document.querySelectorAll(match);

        // change the class name to show for each match

        for (let i=0; i< result.length; i++){
            result[i].className = 'show';
        }

    }
}