
/*jshint esversion:6*/

// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const congratsContainer = document.getElementById('main-div-congrats');
const tryAgainContainer = document.getElementById('try-again-container');
const aboutGame = document.getElementById('about-game');
const scoreValue = document.getElementById('scoreValue');
const tryAgain = document.getElementById('try-again');
const lightningRound = document.getElementById('lightning');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const score = document.getElementById('score');
let timer = document.getElementById('timer');
let quizEnded = false;

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Set timer for lightning round
const timePerQuestion = 20;
let timeLeft = timePerQuestion;
let timerInterval;

// Declare and initialize currentScore
let currentScore = 0; 
let shuffledQuestion;
let currentQuestionIndex = 0;


//Event listeners
startButton.addEventListener('click', startGame);
answerButton.addEventListener('click', selectAnswer);
nextButton.addEventListener('click', setNextQuestion);

// Start game
function startGame() {
    // Hide buttons that are not supposed to show on start 
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');
    timer.classList.add('hide');
    congratsContainer.classList.add('hide');
    console.log('Started');
    shuffledQuestion = questions.sort(() => Math.random() - 0.5); //Shuffle and bring back questions in random order
    currentQuestionIndex = 0; //Will start at the very first question in the array
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
    if (!quizEnded && currentQuestionIndex < 15) {
        showQuestion(shuffledQuestion[currentQuestionIndex++]);
        } else {
    
            quizEnded = true;
            questionContainer.classList.add('hide');
            nextButton.classList.add('hide');
            aboutGame.classList.remove('hide');
            aboutGame.innerText = "Great job!";
            displayEndScore(score);
            startButton.innerText = "Lightning round?";
            startButton.classList.remove('hide');
        }
    }

// Get questions and answers
function showQuestion(question) { 
    
    resultContainer.classList.remove('hide');
    backButton.classList.remove('hide');
    questionElement.innerText = question.question;

    if (question.answers && Array.isArray(question.answers)) {
      question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        answerButton.appendChild(button); 
    });
    } else {
        console.error('Answers are not defined or not an array:', question.answers);
}
}

//Reset buttons when clicking next to implement new questions
function resetState() {
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

//Selected answer
function selectAnswer(e) {
    if (!quizEnded) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

        if (!correct) {
            decrementScore();    
        }}
    Array.from(answerButton.children).forEach(button => { 
        button.disabled = true;
        settingStatus(button, button.dataset.correct);
        // Disable hover effect
        button.classList.add('answered');
    });
    
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        displayEndScore(); // Call displayEndScore() when no more questions are left
        quizEnded = true;
        questionContainer.classList.add('hide');
        nextButton.classList.add('hide');
        aboutGame.classList.remove('hide');
        aboutGame.innerText = "Great job!";
        score.innerText = "Final score:", displayEndScore();
         // Call displayEndScore() when no more questions are left
        startButton.innerText = "Lightning round?";
        startButton.classList.remove('hide');
    }
}

function settingStatus(element, correct) {
    clearUp(element);
    if (correct === 'true') {
        element.classList.add('correct');
        updateScore();
    } else {
        element.classList.add('incorrect');
    }
}

// Render score when getting the answer right
function decrementScore() {
    currentScore--;
    renderScore();
}

// Clear up the button background colors when moving on to the next question
function clearUp(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

//Display the end score
function displayEndScore() {
    score.innerText = `Final Score: ${currentScore} out of 15`; // You can customize this text
    
    // Display different responses to different scores
    if (currentScore === 15) {
        score.innerText += "\nPerfect Score! I can tell you've watched a lot of Friends! Well done!";
    } else if (currentScore >= 10) {
        score.innerText += "\nGreat job! You did well. Keep watching the show and you'll get a perfect score in no time!";
    } else {
        score.innerText += "\nKeep practicing. You'll get better!";
    }
}

// Show modal when rules are clicked
rules.onclick = function() {
    modal.style.display = "block";
};
// Close modal when "x" is clicked
span.onclick = function() {
    modal.style.display = "none";
};
// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




