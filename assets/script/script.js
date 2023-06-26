var timerElement = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var startOverButton = document.getElementById("startOverButton");
var questionsContainer = document.getElementById("questionsContainer");
var timer = 20;
var score = 0;
var timerInterval;
var questionIndex = 0;
var currentQuestionIndex = 0;
var correctAnswer = 0;

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
  } else {
    timer -= 5;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuiz();
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "Quiz Complete!"
    calculateScore()
    
   ;
  }
}

function calculateScore() {
    score = timer >= 0 ? timer : 0;
    questionsContainer.innerHTML =
        "<p>Your score is " + score + "</p>";
}

startButton.addEventListener("click", function () {
  startTimer();
  showQuiz();
});
startOverButton.addEventListener("click", startOver);
