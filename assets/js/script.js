



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



// Variables that is going to loop


// Hide results, try-again, lightning-round and question buttons
resultContainer.style.display = "none";
questionContainer.style.display = "none";
tryAgainContainer.style.display = "none";

// 
startButton.addEventListener('click', runGame);

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

// Flag to check if the game is already in progress
let isGameInProgress = false;

// Run game
function runGame() {
        if (isGameInProgress) {
            console.log("The game is already in progress!");
            return;
        }

        isGameInProgress = true;

        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;

        currentScore = 0;
        renderScore();

        startButton.style.display = "none";
        rulesButton.style.display = "none";

        score.style.display = "block";
        questionContainer.style.display = "block";
        
        nextQuestion();

    }

