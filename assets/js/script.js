



// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const tryAgainContainer = document.getElementById('try-again-container')
const aboutGame = document.getElementById('about-game');
const scoreValue = document.getElementById('scoreValue');
const tryAgain = document.getElementById('try-again');
const lightningRound = document.getElementById('lightning');
const score = document.getElementById('score');
let timer = document.getElementById('timer');

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Set timer for lightning round
const timePerQuestion = 20;



// Variables that is going to loop


// Hide results, try-again, lightning-round and question buttons
resultContainer.classList.add('hide');
questionContainer.classList.add('hide');
tryAgainContainer.classList.add('hide');

// Make start and rules visible
startButton.addEventListener('click', runGame);


function runGame() {
    startButton.classList.add('hide');
}

rules.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


