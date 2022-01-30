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
      question: 'If the cost of a bat and a baseball combined is $1.10 and the bat costs $1.00 more than the ball, how much is the ball ?',
      answers: [
        { text: '$0.05', correct: true },
        { text: '$1.00', correct: false },
        { text: '$0.50', correct: false},
        { text: '$0.10', correct: false},
      ] // Subtract $1.00 from $1.10 and then divide that answer, $0.10 by 2, to get your final answer, $0.05.
    },
    {
        question: 'Add 8.563 and 4.8292.',
        answers: [
          { text: '12.3922', correct: false},
          { text: '13.3922', correct: true},
          { text: '15.2932', correct: false},
          { text: '9.2922', correct: false},
        ] // Add a 0 to the end of 8.563 and then add like you normally would.
      },
      {
      question: 'How many feet are in a mile ?',
        answers: [
          { text: '5,500', correct: false},
          { text: '8,300', correct: false},
          { text: '4,680', correct: false},
          { text: '5,280', correct: true},
        ] 
      },
      {
        question: 'What is 1.92 divided by 3 ?',
        answers: [
          { text: '1.64', correct: false},
          { text: '0.64', correct: true},
          { text: '2.64', correct: false},
          { text: '3.64', correct: false},
        ]
      }, // You need to remove the decimal from 1.92 and act like it isn't there. Once you've divided 192 by 3 to get 64, you can put the decimal place back where it belongs and get your final answer of 0.64.
    {
        question: 'Tommy has 10 oranges. He gives 6 oranges to Julie. How many oranges does Tommy have now ?',
        answers: [
          { text: '5', correct: false},
          { text: '8', correct: false},
          { text: '4', correct: true}, // 10-6=4 Tommy has 4 oranges.
          { text: '6', correct: false},
        ]
      },
]