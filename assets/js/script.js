
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

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Set timer for lightning round
const timePerQuestion = 20;
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
    
    shuffledQuestion = questions.sort(() => Math.random() - .5); //Shuffle and bring back questions in random order
    currentQuestionIndex = 0; //Will start at the very first question in the array
    renderScore();
    questionContainer.classList.remove('hide');
    setNextQuestion();

    answerButton.classList.remove('hide');
    resultContainer.classList.remove('hide');
    backButton.classList.remove('hide');
}

// Update the player's score
function updateScore() {
    currentScore++; // Increment the score
    renderScore(); // Update the score display
}

// Update the score by displaying correct clicked answers
function renderScore() {
    score.innerText = currentScore;
}


//Next question
function setNextQuestion() {
    resetState();
    if (shuffledQuestion.length > currentQuestionIndex) {
    showQuestion(shuffledQuestion[currentQuestionIndex]);
    }
}

// Get question
function showQuestion(question) { 
    resultContainer.classList.remove('hide');
    backButton.classList.remove('hide');
    questionElement.innerText = question.question;
      question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            button.addEventListener('click', () => {
                updateScore();
        });
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);  
    })  
}

function resetState() {
    nextButton.addEventListener('click', showQuestion);
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

//Selected answer
function selectAnswer(e) {
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct) {
            button.disabled = true;
        }
        
        settingStatus(button, button.dataset.correct);
        // Disable hover effect
        button.classList.add('answered');
        updateScore();
    });
    
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
        
    } else {
        displayEndScore(); // Call displayEndScore() when no more questions are left
        startButton.classList.remove('hide');
    }
}

function settingStatus(element, correct) {
    clearUp(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
}
    
}

// Clear up the button background colors when moving on to the next question
function clearUp(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
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




