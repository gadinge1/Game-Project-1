// Buttons and Elements
const homeButton = document.getElementById('home-button')
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Shuffle function. Questions will shuffle every time it refreshes or restarts or when Next is clicked.
let shuffledQuestions, currentQuestionIndex

// Event listeners for Start, Next and Home buttons 
homeButton.addEventListener('click', goHome) // when clicked it goes to home page.
startButton.addEventListener('click', startGame) // when clicked it goes to the first question.
nextButton.addEventListener('click', () => { // when clicked it goes to the next question.
  currentQuestionIndex++
  setNextQuestion()
})
// Function to go to home page
function goHome() {
  homeButton.classList.add('hide') // this function goes back to home page.
  window.document.location='welcome.html' // path to the welcome page.
}
// Function for start game.
function startGame() { 
    startButton.classList.add('hide') // this function hides the start button when it's clicked.
    shuffledQuestions = questions.sort(() => Math.random() - .5) // shuffles random questions.
    currentQuestionIndex = 0 // setting it to 0 because it starts to the first question
    questionContainerElement.classList.remove('hide') // hides the question container.
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
      button.addEventListener('click', selectAnswer) // shows answers when button answer is clicked.
      answerButtonsElement.appendChild(button)
    })
  }
// Reset function which helps showing the answers and hiding the next answers.
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide') // after clicking the answer the next question will show and hide the next button until answer is clicked.
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  // Select answer function
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct) // shows if the answer is correct.
    Array.from(answerButtonsElement.children).forEach(button => { // an array for forEach loop.
      setStatusClass(button, button.dataset.correct) // correct answer status.
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide') // next button is hidden when clicked.
    } else {
      startButton.innerText = 'Restart' // Allows the user to restart.
      startButton.classList.remove('hide') // Start button disappears when the start button is clicked.
    }
  }
  // Set status class function. Shows correct or wrong.
  function setStatusClass(element, correct) {
    clearStatusClass(element) // it clears the status when question restarts or refreshes. 
    if (correct) {
      element.classList.add('correct') // correct class
    } else {
      element.classList.add('wrong') // wwrong class
    }
  }
  // Function to show the status for correct and wrong button
  function clearStatusClass(element) {
    element.classList.remove('correct') // hides the correct status.
    element.classList.remove('wrong') // hides the wrong status.
  }
  // List of questions and answers. True is for correct answer and false is for wrong answers.
  const questions = [
    {
      question: 'How many known and named planets are there in the solar system ?',
      answers: [
        { text: '9', correct: false },
        { text: '10', correct: false },
        { text: '8', correct: true},
        { text: '7', correct: false},
      ] // There are eight and they are Mars, Mercury, Venus, Earth, Saturn, Uranus, Jupiter, and Neptune. Pluto, formerly the ninth planet in our solar system, has been demoted and is now now classified as a dwarf planet.
    },
    {
        question: 'About how many bones are in the standard human body at birth ?',
        answers: [
          { text: '300', correct: false},
          { text: '350', correct: false},
          { text: '312', correct: true},
          { text: '315', correct: false},
        ] // An adult human typically has 206 bones due to some fusing together as we grow. At birth there are typically more than 300 bones. The human body is typically done with bone fusing by age 30.
      },
      {
      question: 'How many colonies were there when the United States separated from England ?',
        answers: [
          { text: '13', correct: true},
          { text: '12', correct: false},
          { text: '15', correct: false},
          { text: '14', correct: false},
        ] // The original 13 colonies were Delaware, Pennsylvania, New Jersey, Georgia, Connecticut, Massachusetts Bay, Maryland, South Carolina, New Hampshire, Virginia, New York, North Carolina, and Rhode Island and Providence Plantations. They seceded from England in 1776.
      },
      {
        question: 'In the movie "101 Dalmatians", how many of the dalmatians were not puppies ?',
        answers: [
          { text: 'Three', correct: false},
          { text: 'Five', correct: false},
          { text: 'Two', correct: true},
          { text: 'One', correct: false},
        ] // Pongo and Perdita were the only grown up Dalmatians.
      },
      {
        question: 'How many pennies are there in $2.00 ?',
        answers: [
          { text: '100 pennies', correct: false},
          { text: '300 pennies', correct: false},
          { text: '200 pennies', correct: true}, // 200 pennies equal $2.00.
          { text: '400 pennies', correct: false},
        ]
      },
      
]