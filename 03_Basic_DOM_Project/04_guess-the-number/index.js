// Generating a random number between 1 to 100
let randomNumber = Math.floor((Math.random()*100)+1)
let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame)
{
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert("Please enter a valid number !!")
    } else if(guess < 1)
    {
        alert("Please enter a value greater than 1 !!")
    } else if(guess > 100)
    {
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11)
        {
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNumber){
        displayMessage("Congratulations !! You guessed it right :) ")
    }else if(guess < randomNumber){
        displayMessage("You guessed TOOOO LOWWWW")
    }else{
        displayMessage("You guessed TOOOOO HIGHHHHH")
    }
}

function displayGuess(guess)
{
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newGame">Start new Game</h4>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
});
}
  