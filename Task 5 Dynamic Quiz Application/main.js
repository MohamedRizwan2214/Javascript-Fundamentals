const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
// questionElement.innerHTML="Rizwan"
const answerButtonsElement = document.getElementById("answers");

const nextButton = document.getElementById("next");

let curentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  curentQuestionIndex = 0;
  score = 0;
  
  // nextButton.style.display="block";
  showQustion();
}

function showQustion() {
  resetStaet();
  let currentQuestion = questions[curentQuestionIndex];
  let qNo = curentQuestionIndex + 1;
  // questionElement.innerText="dmiwfiue";
  // console.log("bffhaiha")
  questionElement.innerText = qNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtonsElement.appendChild(button);
    if(answer.correct)
    {
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetStaet() {
  // nextButton.style.display = "block";
  if (answerButtonsElement.hasChildNodes()) {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.dataset.correct == "true") {
    selectedButton.classList.add("correct");

    console.log("Selected Answer:", selectedButton.innerText);
    score++;
    selectedButton.classList.add("correct");
  }
  else{
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.classList.add("no-hover");
  });
}

function finalPage()
{
  resetStaet();
  questionElement.innerText = "Quiz Over! Your score is: " + score + "/" + questions.length;
  nextButton.style.display = "none";
  const button = document.createElement("button");
  button.innerText = "Restart Quiz";
  button.classList.add("btn");
  answerButtonsElement.appendChild(button);
  button.addEventListener("click", startQuiz);
  button.style.display = "block";
}

nextButton.addEventListener("click", () => {
  curentQuestionIndex++;
  if (curentQuestionIndex < questions.length) {
    showQustion();
  } else {
    // alert("Quiz Over! Your score is: " + score);
    finalPage();
    // alert("Quiz Over! Your score is: " + score + "/" + questions.length);
    // startQuiz();
  }
})

startQuiz();
