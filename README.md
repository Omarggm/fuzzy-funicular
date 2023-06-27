# fuzzy-funicular

# Quiz Time Application
Welcome to the Quiz Time Application! This is a simple web-based quiz that tests your knowledge on various topics. The application presents multiple-choice questions to the user and provides instant feedback on the correctness of the answers. It also calculates the score based on the number of correct answers and the remaining time.

## Features
Countdown Timer: The application features a timer that counts down from 60 seconds. If the timer reaches zero before the user completes the quiz, it displays "Time's Up!" and calculates the final score.
Multiple Questions: The application includes a set of predefined questions with multiple choices. Each question has one correct answer, and the user selects their answer by clicking on the corresponding button.
Instant Feedback: After selecting an answer, the application provides immediate feedback on whether the choice was correct or incorrect. For incorrect answers, the timer is deducted by 10 seconds.
Score Calculation: At the end of the quiz, the application calculates the score based on the remaining time. Each correct answer contributes to the score, while incorrect answers result in a time penalty.
High Scores: The application allows users to enter their initials at the end of the quiz and records their scores. It displays a list of high scores, sorted in descending order, including the initials, score, and number of correct answers. The top 5 scores are saved in the browser's local storage.
Technologies Used
The Quiz Time Application is built using the following technologies:

HTML: The structure and layout of the web page are defined using HTML.
CSS: CSS is used to style the HTML elements and create an appealing visual design.
JavaScript: The application logic and interactivity are implemented using JavaScript. It handles the timer, question display, answer checking, score calculation, and high score management.
Getting Started
To use the Quiz Time Application, follow these steps:

Clone the repository: git clone <repository-url>
Open the index.html file in a web browser.
The quiz will start automatically when you click the "Start" button.
Read each question and click on the button corresponding to your chosen answer.
After answering all the questions or when the timer runs out, the final score will be displayed along with the option to enter your initials.
You can view the high scores by clicking the "Start Over" button after completing the quiz.
## Customization
If you want to customize the quiz, you can modify the following:

Questions and Choices: Open the script.js file and update the questions array with your own questions, choices, and correct answers.
Timer Duration: In the script.js file, adjust the timer variable to set a different duration for the countdown timer.
Compatibility
The Quiz Time Application is compatible with modern web browsers, including Chrome, Firefox, Safari, and Edge. It requires JavaScript to be enabled.

## License
This project is licensed under the MIT License.

## Acknowledgements
The Quiz Time Application was developed by [Your Name]. It was created as a practice project to demonstrate basic HTML, CSS, and JavaScript skills. Feel free to use and modify it for your own purposes.