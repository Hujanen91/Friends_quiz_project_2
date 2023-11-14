

// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const tryAgainContainer = document.getElementById('try-again-container');
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

startButton.addEventListener('click', startGame);

// Start game
function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');

}

//Next question
function setNextQuestion() {

}

//Selected answer
function selectAnswer() {

}


// Show modal when rules are clicked
rules.onclick = function() {
    modal.style.display = "block";
}
// Close modal when "x" is clicked
span.onclick = function() {
    modal.style.display = "none";
}
// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






