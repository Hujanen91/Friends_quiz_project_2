
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
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button')
const score = document.getElementById('score');
let timer = document.getElementById('timer');

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Set timer for lightning round
const timePerQuestion = 20;

let shuffledQuestions;
let currentQuestionIndex;
let currentScore = 0; // Declare and initialize currentScore
let timeLeft = timePerQuestion;
let timerInterval;

//Event listeners
startButton.addEventListener('click', startGame);
answerButton.addEventListener('click', selectAnswer);

// Start game
function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');
    timer.classList.add('hide');

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentScore = 0;
    questionContainer.classList.remove('hide');
    answerButton.classList.remove('hide');
    resultContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    backButton.classList.remove('hide');
}

//Next question
function setNextQuestion() {

}

//Selected answer
function selectAnswer() {
    console.log('selected');
    
}

//Time and score
function timerScore() {

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






