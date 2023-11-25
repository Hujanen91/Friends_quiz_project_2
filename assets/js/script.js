
/*jshint esversion:6*/

// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const aboutGame = document.getElementById('about-game');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const score = document.getElementById('score');
let quizEnded = false;

// Rules Modal from w3schools
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

// Declare and initialize currentScore
let currentScore = 0; 
let shuffledQuestion;
let currentQuestionIndex = 0;

//Event listeners
startButton.addEventListener('click', startGame);
answerButton.addEventListener('click', selectAnswer);
nextButton.addEventListener('click', setNextQuestion);
backButton.addEventListener('click', function(e) {
    location.reload();
  }, false);

// Start game. Code inspired from Web Dev Simplified
function startGame() {
    // Hide buttons that are not supposed to show on start 
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');

    //Reset the array of used questions
    usedQuestionIndices = []; 
    //Shuffle and bring back questions in random order
    shuffledQuestion = questions.sort(() => Math.random() - 0.5); 
    //Will start at the very first question in the array
    currentQuestionIndex = 0; 
    questionContainer.classList.remove('hide');
    //Call the set next question function to prep for a question
    setNextQuestion();
    answerButton.classList.remove('hide');
    resultContainer.classList.remove('hide');
    backButton.classList.remove('hide');
}

// Update the player's score. Code inspired from Web Dev Simplified
function updateScore() {
    // Increment the score
    currentScore++; 
    // Update the score display
    renderScore(); 
}

// Update the score by displaying correct clicked answers.
function renderScore() {
    score.innerText = currentScore;
}

//Next question. Code inspired from Web Dev Simplified
function setNextQuestion() {
    //Call resetState function to reset buttons and implement new questions
    resetState();
    
    //As long as quiz is under 15 questions get new questions in a shuffled order
    //Push asked questions to its own array to not be called again
    if (!quizEnded && currentQuestionIndex < 15) {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * questions.length);
        } while (usedQuestionIndices.includes(nextIndex));

        usedQuestionIndices.push(nextIndex);
        showQuestion(shuffledQuestion[currentQuestionIndex++]);
        
        //When quiz ends show final score, hide and show buttons that are needed.
        } else { 
            quizEnded = true;
            questionContainer.classList.add('hide');
            nextButton.classList.add('hide');
            aboutGame.classList.remove('hide');
            //Call function to display end score
            displayEndScore(score);
        }
}

// Get questions and answers. Code inspired from Web Dev Simplified
function showQuestion(question) { 

    resultContainer.classList.remove('hide');
    backButton.classList.remove('hide');
    questionElement.innerText = question.question;

    //Get answers for each question and implement them in the answer-buttons
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

    // Give error if answers are not defined or in an array
    } else {
        console.error('Answers are not defined or not an array:', question.answers);
}
}

//Reset buttons when clicking next to implement new questions
// Code inspired from Web Dev Simplified
function resetState() {
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

//Selected answer. Code inspired from Web Dev Simplified
function selectAnswer(e) {
    if (!quizEnded) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

        //Stops the scorecount if the answer is incorrect
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
        // Call displayEndScore() when no more questions are left
        displayEndScore(); 
        quizEnded = true;
        questionContainer.classList.add('hide');
        nextButton.classList.add('hide');
        aboutGame.classList.remove('hide');
        displayEndScore();
    }
}

//Display red or green when getting wrong or right answers
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
    score.innerText = `${currentScore} out of 15`;
    // Display different responses to different scores
    if (currentScore === 15) {
        aboutGame.innerText = "You aced the Friends quiz like Joey aced the art of not sharing his food. I guess we could say you're the Ross Geller of trivia: unstoppable and a bit too proud of your accomplishments! Time to celebrate with Monica's turkey dance!";
    } else if (currentScore >= 10) {
        aboutGame.innerText = "Well, you may not be on a break, but your quiz score sure is! I guess you're the Chandler of this quiz, could you BE any more average?";
    } else {
        aboutGame.innerText = "Well, your Friends knowledge is so low, even Janice would say, 'Oh my god!'. Looks like you'll be in 'The One with the Low Score' episode.";
    }
}

// Show modal when rules are clicked. Rules Modal from w3schools
rules.onclick = function() {
    modal.style.display = "block";
};
// Close modal when "x" is clicked. Rules Modal from w3schools
span.onclick = function() {
    modal.style.display = "none";
};
// Close the modal when clicking outside the modal content. Rules Modal from w3schools
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




