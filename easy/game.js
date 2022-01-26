// Helped functions run as soon as I define it. This will ensure that the game doesn't interfere with any other scripts on the page.
(function(){

// Functions 
function buildQuestion(){}
function showAnswers(){}

// Variables
const questionContainer = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const submitButton = document.getElementById('submit');

// Display question
buildQuestion();

// Event Listeners. When submit is click, show answers
submitButton.addEventListener('click', showAnswers);


// Using an array will make the questions to iterate over.
const myQuestions = [
    {
        question: "If 1=3, 2=3, 3=5, 4=4, 5=4, Then, 6=?" ,
        answers: {
            a: "4",
            b: "3",
            c: "6", 
        },
        correctAnswer: "is 3, because 'six' has three letters" 
    },
    {
        question: "Using only an addition, how do you add eight 8's and get the number 1000?" , 
        answers: {
            a: "88 + 888", 
            b: "88888 + 88",
            c: "888 + 88 + 8 + 8 + 8",
        },
        correctAnswer: "is c, because 888 + 88 + 8 + 8 + 8= 1000"
    },
    {
        question: "Look at this series: 36, 34, 30, 28, 24, _. What number should come next?" ,
        answers: {
            a: "22",
            b: "21",
            c: "20",
        },
        correctAnswer: "is a: 22"
    }
]; // Note: these questions will appear in the order they're listed, as this is an array.

// Calling out functions.
function buildQuestion(){}
    // Variable to store the HTML output 
    const output = [];

// For each question
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        // Variable to store the list of possible answers
        const answers = [];
        // For each available answer
        for(letter in currentQuestion.answers){
            // add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value=${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>` 
            );
            }
        // Question and Answers will be added to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
);
        // Combining output list into one string of HTML 
        questionContainer.innerHTML = output.join('');

// Show Answers Function
function showAnswers(){
    // Containers from our question
    const answersContainer = questionContainer.querySelectorAll('.answers');

    // The list of user's answers
    let numCorrect = 0;

    // For each question
    myQuestions.forEach((currentQuestion, questionNumber) => {
        
        // Selected answer
        const answersContainer = answersContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`
        const userAnswer = (answersContainer.querySelector(selector) || {}).value; // ||: prevents from crashing the game. If the user leaves it blank or skips the question, it will be undefined or the player's answer.

        // If answered correct
        if(userAnswer === currentQuestion.correctAnswer){
            // Add to the number of correct answers
            numCorrect++;
            // Correct answers is in green
            answersContainers[questionNumber].style.color = 'lightgreen';
        }
            // If answer is wrong or blank
            else{
                // Color the answers red
                answersContainers[questionNumber].style.color = 'red';
            }
        });
        // Show number of correct answers 
        answersContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}` ;
}







})