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
      question: 'If 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, Then, 6 = ?',
      answers: [
        { text: '4', correct: false },
        { text: '3', correct: true },
        { text: '6', correct: false},
        { text: '12', correct: false},
      ]
    },
    {
        question: 'Using only an addition, how do you add eight 8s and get the number 1000 ?',
        answers: [
          { text: '88 + 888', correct: false},
          { text: '88888 + 88', correct: false},
          { text: '888 + 88 + 8 + 8 + 8', correct: true},
          { text: '8888 + 8', correct: false},
        ]
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
        ]
      },
      
]