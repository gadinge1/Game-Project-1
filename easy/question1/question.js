// Helped functions run as soon as I define it. This will ensure that the game doesn't interfere with any other scripts on the page.
(function(){

// Functions 
function buildQuestion(){}
function showAnswer(){}

// Variables
const questionContainer = document.getElementById('question');
const answerContainer = document.getElementById('answers');
const submitButton = document.getElementById('submit');

// Display question
buildQuestion();

// Event Listeners. When submit is click, show answers
submitButton.addEventListener('click', showAnswers);


// Using an array will make the questions to iterate over.
const myQuestion = [
    {
        question: "If 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, Then, 6 = ?" ,
        answers: {
            a: "4",
            b: "3",
            c: "6", 
        },
        correctAnswer: "is 3, because 'six' has three letters" 
    },


]; // Note: these questions will appear in the order they're listed, as this is an array.

// Calling out function.
function buildQuestion(){}
    // Variable to store the HTML output 
    const output = [];

// For each question
myQuestion.forEach(
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
        // Question and Answer will be added to the output
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
    myQuestion.forEach((currentQuestion, questionNumber) => {
        
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
        answersContainer.innerHTML = `${numCorrect} out of ${myQuestion.length}` ;
}

})();