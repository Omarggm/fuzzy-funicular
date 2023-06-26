var timerElement = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var startOverButton = document.getElementById("startOverButton");
var questionsContainer = document.getElementById("questionsContainer");
var highScoresContainer = document.getElementById("highScoresContainer");
var timer = 60;
var score = 0;
var timerInterval;
var questionIndex = 0;
var currentQuestionIndex = 0;
var correctAnswer = 0;
var highScores = [];

var questions = [
  {
    question: "Question 1: What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: 1,
  },
  {
    question: "Question 2: Who painted the Mona Lisa?",
    choices: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    correctAnswer: 0,
  },
  {
    question: "Question 3: What is the largest country in the world?",
    choices: ["Russia", "Canada", "China", "United States"],
    correctAnswer: 0,
  },
];

function updateTimer() {
  timerElement.textContent = timer;
  timer--;

  if (timer < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's Up!";
    calculateScore();
  }
}

function startTimer() {
  startButton.disabled = true;
  timerInterval = setInterval(updateTimer, 1000);
}

function startOver() {
  location.reload();
}

function showQuiz() {
  var question = questions[currentQuestionIndex];
  var choicesHTML = "";

  for (var j = 0; j < question.choices.length; j++) {
    choicesHTML +=
      "<button onclick='checkAnswer(" +
      currentQuestionIndex +
      ", " +
      j +
      ")'>" +
      question.choices[j] +
      "</button>";
  }

  var html = `<div>
        <p>${question.question}</p>
        ${choicesHTML}
    </div>`;

  questionsContainer.innerHTML = html;
}

function checkAnswer(questionIndex, choiceIndex) {
  var question = questions[questionIndex];

  if (question.correctAnswer === choiceIndex) {
    correctAnswer++;
  } else {
    timer -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuiz();
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "Quiz Complete!";
    calculateScore();
  }
}

function calculateScore() {
  if (correctAnswer > 0) {
    score = timer;
  } else {
    score = 0;
  }

  questionsContainer.innerHTML =
    "<p>Your score is " +
    score +
    "</p>" +
    "<p>Questions answered correctly: " +
    correctAnswer +
    " out of " +
    questions.length +
    "</p>";

  var initials = prompt("Please enter your initials");

  if (initials === null) {
    initials = "Anonymous";
  }

  var scoreEntry = { initials: initials, score: score, correct: correctAnswer };
  highScores.push(scoreEntry);
  highScores.sort((a, b) => b.score - a.score);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  displayHighScores();
}

function displayHighScores() {
  highScoresContainer.innerHTML = "<h3>High Scores</h3>";

  if (highScores.length > 0) {
    var scoresHTML = "<ol>";

    for (var i = 0; i < highScores.length; i++) {
      scoresHTML += "<li>" + highScores[i].initials + " - " + highScores[i].score + "</li>";
    }

    scoresHTML += "</ol>";
    highScoresContainer.innerHTML += scoresHTML;
  } else {
    highScoresContainer.innerHTML += "<p>No high scores yet.</p>";
  }
}

window.onload = function () {
  var storedHighScores = localStorage.getItem("highScores");

  if (storedHighScores !== null) {
    highScores = JSON.parse(storedHighScores);
    displayHighScores();
  }
};

startButton.addEventListener("click", function () {
  startTimer();
  showQuiz();
});
startOverButton.addEventListener("click", startOver);
