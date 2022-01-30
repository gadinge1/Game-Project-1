const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
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