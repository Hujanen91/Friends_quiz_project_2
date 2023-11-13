



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

// Set timer for lightning round
const timePerQuestion = 20;

// Variables that is going to loop


// Hide results, try-again, lightning-round and question buttons
resultContainer.classList.add('hide');
questionContainer.classList.add('hide');
tryAgainContainer.classList.add('hide');

// Make start and rules visible

function runGame();


