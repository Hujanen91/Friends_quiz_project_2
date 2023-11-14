
// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const tryAgainContainer = document.getElementById('try-again-container');
const aboutGame = document.getElementById('about-game');
const scoreValue = document.getElementById('scoreValue');
const tryAgain = document.getElementById('try-again');
const lightningRound = document.getElementById('lightning');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const score = document.getElementById('score');
let timer = document.getElementById('timer');

let shuffledQuestions, currentQuestionIndex;

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Set timer for lightning round
const timePerQuestion = 20;
let currentScore = 0; // Declare and initialize currentScore
let timeLeft = timePerQuestion;
let timerInterval;

// Creates a way to shuffle questions at random from questions.js


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
    
    shuffledQuestions = questions.sort(() => Math.random() - .5); //Shuffle and bring back questions in random order
    currentQuestionIndex = 0 //Will start at the very first question in the array
    questionContainer.classList.remove('hide');
    setNextQuestion();

    answerButton.classList.remove('hide');
    resultContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    backButton.classList.remove('hide');
}

//Next question
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    
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




