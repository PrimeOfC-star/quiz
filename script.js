const quiz = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    choices: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "What is the purpose of the CSS box-sizing property?",
    choices: ["To specify whether an element's background should be boxed", "To control the spacing between elements", "To specify the type of box to use for an element", "To control how an element's width and height are calculated"],
    answer: "To control how an element's width and height are calculated"
  },
  {
    question: "What is the purpose of the JavaScript Array method 'splice()'?",
    choices: ["To add elements to the end of an array", "To remove elements from an array", "To sort an array alphabetically", "To reverse the order of the elements in an array"],
    answer: "To remove elements from an array"
  },
  {
    question: "What is the CSS 'float' property used for?",
    choices: ["To make an element float to the left or right of its container", "To specify the distance between elements", "To control the visibility of an element", "To apply a shadow effect to an element"],
    answer: "To make an element float to the left or right of its container"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    choices: ["<ol>", "<li>", "<ul>", "<dl>"],
    answer: "<ul>"
  },
  {
    question: "What is the purpose of the JavaScript 'typeof' operator?",
    choices: ["To check if a value is undefined", "To check the data type of a value", "To convert a value to a string", "To compare two values"],
    answer: "To check the data type of a value"
  },
  {
    question: "Which CSS property is used to apply a background image to an element?",
    choices: ["background-color", "background-image", "background-size", "background-repeat"],
    answer: "background-image"
  },
  {
    question: "What does the HTML <head> element contain?",
    choices: ["The main content of the page", "The navigation links of the page", "The footer of the page", "The metadata of the page"],
    answer: "The metadata of the page"
  },
  {
    question: "What is the purpose of the JavaScript 'setTimeout()' function?",
    choices: ["To pause the execution of a script for a specified amount of time", "To execute a function after a specified amount of time", "To set a timer for a specified event", "To stop the execution of a script"],
    answer: "To execute a function after a specified amount of time"
  }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

function showQuestion() {
  const question = quiz[currentQuestion];
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = question.choices[i];
    button.addEventListener("click", handleAnswerClick);
    choicesElement.appendChild(button);
  }
}

function handleAnswerClick(event) {
  const selectedAnswer = event.target.textContent;
  const question = quiz[currentQuestion];
  if (selectedAnswer === question.answer) {
    event.target.classList.add("correct");
    score++;
  } else {
    event.target.classList.add("incorrect");
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    questionElement.textContent = "Quiz complete!";
    choicesElement.innerHTML = "";
    document.getElementById("submit").style.display = "none";
    scoreElement.textContent = `Your score: ${score} out of ${quiz.length}`;
  }
}

showQuestion();
