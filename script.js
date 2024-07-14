// script.js

// Array of questions, answers, and explanations
const readingQuestions = [
    { question: "What is 2 + 2?", answer: "4", explanation: "Adding 2 and 2 results in 4." },
    { question: "What is the capital of France?", answer: "Paris", explanation: "The capital of France is Paris." },
    { question: "What is the square root of 16?", answer: "4", explanation: "The square root of 16 is 4." }
    // Add more reading questions as needed
];

const mathQuestions = [
    { question: "What is 3 x 3?", answer: "9", explanation: "Multiplying 3 and 3 results in 9." },
    { question: "What is 10 - 2?", answer: "8", explanation: "Subtracting 2 from 10 results in 8." },
    { question: "What is 5 + 7?", answer: "12", explanation: "Adding 5 and 7 results in 12." }
    // Add more math questions as needed
];

// Function to populate spinner with questions
function populateSpinner(spinnerId, questions) {
    const spinner = document.getElementById(spinnerId);
    spinner.innerHTML = '';
    questions.forEach(q => {
        const div = document.createElement('div');
        div.textContent = q.question;
        spinner.appendChild(div);
    });
}

// Function to spin the spinner and select a question
function spinSpinner(spinnerId, questions, callback) {
    const spinner = document.getElementById(spinnerId);
    spinner.classList.add('spinning');
    setTimeout(() => {
        spinner.classList.remove('spinning');
        const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
        callback(selectedQuestion);
    }, 3000);
}

// Function to show the final question and answer section
function showFinalQuestion(readingQuestion, mathQuestion) {
    const finalQuestionContainer = document.getElementById('final-question-container');
    document.getElementById('question').textContent = `Reading: ${readingQuestion.question}\nMath: ${mathQuestion.question}`;
    document.getElementById('answer').textContent = `Reading Answer: ${readingQuestion.answer}\nMath Answer: ${mathQuestion.answer}`;
    document.getElementById('explanation').textContent = `Reading Explanation: ${readingQuestion.explanation}\nMath Explanation: ${mathQuestion.explanation}`;
    finalQuestionContainer.classList.remove('hidden');
}

// Event listeners for spin buttons
document.getElementById('reading-spin-button').addEventListener('click', function() {
    spinSpinner('reading-spinner', readingQuestions, selectedQuestion => {
        this.classList.add('hidden');
        selectedReadingQuestion = selectedQuestion;
        if (selectedMathQuestion) {
            showFinalQuestion(selectedReadingQuestion, selectedMathQuestion);
        }
    });
});

document.getElementById('math-spin-button').addEventListener('click', function() {
    spinSpinner('math-spinner', mathQuestions, selectedQuestion => {
        this.classList.add('hidden');
        selectedMathQuestion = selectedQuestion;
        if (selectedReadingQuestion) {
            showFinalQuestion(selectedReadingQuestion, selectedMathQuestion);
        }
    });
});

// Event listener for the start button
document.getElementById('start-button').addEventListener('click', function() {
    // Hide title screen and show question screen
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
});

// Event listener for the show answer button
document.getElementById('show-answer-button').addEventListener('click', function() {
    const answerContainer = document.getElementById('answer-container');
    if (answerContainer.classList.contains('hidden')) {
        answerContainer.classList.remove('hidden');
        this.textContent = 'Hide Answer';
    } else {
        answerContainer.classList.add('hidden');
        this.textContent = 'Show Answer';
    }
});

// Populate spinners with questions initially
populateSpinner('reading-spinner', readingQuestions);
populateSpinner('math-spinner', mathQuestions);

// Variables to hold the selected questions
let selectedReadingQuestion = null;
let selectedMathQuestion = null;
