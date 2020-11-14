let game;

// setup variables for the reset button and the keyboard element.

const button = document.querySelector("#btn__reset");
const key = document.getElementById("qwerty");

button.addEventListener('click', (e) => {

    // remove any existing li elements before starting game
    const ul = document.querySelector('#phrase').firstElementChild;
    ul.innerHTML='';

    // reset onscreen keyboard buttons

    const keyrow = document.querySelectorAll('.keyrow'); // get a list of key rows (3 in total)
    for (let i = 0; i < keyrow.length; i++){
        const keys = keyrow[i].getElementsByTagName('button'); // inside each row of keys, get each button
        for (let i = 0; i < keys.length; i++){
            keys[i].className = 'key'; // loop through each button changing class name 
            keys[i].disabled = false; // change button to enabled
        }
    }

    // reset all heart images

    let list = document.querySelectorAll('.tries');
    for (let i=0; i < list.length; i++){
        list[i].getElementsByTagName('img')[0].src = 'images/liveHeart.png';
    }

    // start the game
    game = new Game;
    game.startGame();
})

// check that the target clicked is a submit button. If it is, pass it over to the handler in game

key.addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
        game.handleInteraction(e.target);
    }
})


