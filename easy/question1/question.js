// Buttons 
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Shuffle function. Questions will shuffle every time it refreshes or restarts.
let shuffledQuestions, currentQuestionIndex

// Event listeners for Start and Next buttons 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// Function for the start game.
function startGame() {
    startButton.classList.add('hide') // this function hides the start button when it's clicked.
    shuffledQuestions = questions.sort(() => Math.random() - .5) // shuffles random questions.
    currentQuestionIndex = 0 // setting it to 0 because it starts to the first question
    questionContainerElement.classList.remove('hide') // the question-container shows up.
    setNextQuestion() // calling the next question.
  }
// Function for the next question.  
function setNextQuestion() {
    resetState() // reset the question to its default and set a new question.
    showQuestion(shuffledQuestions[currentQuestionIndex]) // This shows the next question at the current index.
  }
// Function for show question.
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => { // creates the answer for each.
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct // Setting dataset for only correct answer.
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
// Reset function which helps showing the answers and hiding the next answers.
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide') // after clicking the answer the next question will show and hide the next button.
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
// Select answer function
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => { // using an array to use for forEach loop.
      setStatusClass(button, button.dataset.correct) // this will check if the button is the correct answer.
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide') // this will help move to the next question whenever next button is clicked.
    } else {
      startButton.innerText = 'Restart' // Allows the user to restart.
      startButton.classList.remove('hide')
    }
  }
// Set status class function. Shows correct or wrong.
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct') // correct class
    } else {
      element.classList.add('wrong') // wrong class
    }
  }
// Function to show the status for correct and wrong button
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

// List of questions and answers. True is for correct answer and false is for wrong answers.
  const questions = [
    {
      question: 'If 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, Then, 6 = ?',
      answers: [
        { text: '4', correct: false },
        { text: '3', correct: true },
        { text: '6', correct: false},
        { text: '12', correct: false},
      ] // is 3, because ‘six’ has three letters
    },
    {
        question: 'Using only an addition, how do you add eight 8s and get the number 1000 ?',
        answers: [
          { text: '88 + 888', correct: false},
          { text: '88888 + 88', correct: false},
          { text: '888 + 88 + 8 + 8 + 8', correct: true},
          { text: '8888 + 8', correct: false},
        ] // 888 + 88 + 8 + 8 + 8 = 1000
      },
      {
      question: 'Look at this series: 36, 34, 30, 28, 24, _. What number should come next ?',
        answers: [
          { text: '22', correct: true},
          { text: '21', correct: false},
          { text: '20', correct: false},
          { text: '23', correct: false},
        ]
      },
      {
        question: 'I am an odd number. Take away one letter and I become even. What number am I ?',
        answers: [
          { text: 'Five', correct: false},
          { text: 'Nine', correct: false},
          { text: 'Seven', correct: true},
          { text: 'Three', correct: false},
        ] // Seven (take away the ‘s’ and it becomes ‘even’).
      },
      {
        question: 'At lunch Johnny counts 5 tables. If there are 10 people at each table, how many people are there total ?',
        answers: [
          { text: '80', correct: false},
          { text: '40', correct: false},
          { text: '50', correct: true}, // 5 tables times 10 people per table = 50 people. 5x10=50.
          { text: '20', correct: false},
        ]
      },
      
]