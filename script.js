// script.js

// Array of questions, answers, and explanations
const readingQuestions = [
    { question: "What is 2 + 2?", answer: "4", explanation: "Adding 2 and 2 results in 4." },
    { question: "What is the capital of France?", answer: "Paris", explanation: "The capital of France is Paris." },
    { question: "What is the square root of 16?", answer: "4", explanation: "The square root of 16 is 4." },
    { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare", explanation: "William Shakespeare wrote 'Hamlet'." },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", explanation: "Jupiter is the largest planet in our solar system." }
    // Add more reading questions as needed
];

const mathQuestions = [
    { question: "What is 3 x 3?", answer: "9", explanation: "Multiplying 3 and 3 results in 9." },
    { question: "What is 10 - 2?", answer: "8", explanation: "Subtracting 2 from 10 results in 8." },
    { question: "What is 5 + 7?", answer: "12", explanation: "Adding 5 and 7 results in 12." },
    { question: "What is the square root of 25?", answer: "5", explanation: "The square root of 25 is 5." },
    { question: "How many sides does a hexagon have?", answer: "6", explanation: "A hexagon has 6 sides." }
    // Add more math questions as needed
];

// Function to populate spinner with questions
function populateSpinner(spinnerId, questions) {
    const spinner = document.getElementById(spinnerId);
    spinner.innerHTML = '';
    // Shuffle questions for variety
    shuffleArray(questions);
    questions.slice(0, 5).forEach(q => {
        const div = document.createElement('div');
        div.textContent = q.question;
        spinner.appendChild(div);
    });
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to spin the spinner and select a question
function spinSpinner(spinnerId, questions, callback) {
    const spinner = document.getElementById(spinnerId);
    spinner.classList.add('spinning');
    setTimeout(() => {
        spinner.classList.remove('spinning');
        const selectedQuestion = questions[Math.floor(Math.random() * 5)]; // Select one of the displayed questions
        callback(selectedQuestion);
    }, 3000); // Adjusted duration for demonstration
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
    this.classList.add('hidden');
    spinSpinner('reading-spinner', readingQuestions, selectedQuestion => {
        if (selectedMathQuestion) {
            showFinalQuestion(selectedQuestion, selectedMathQuestion);
        } else {
            selectedReadingQuestion = selectedQuestion;
        }
    });
});

document.getElementById('math-spin-button').addEventListener('click', function() {
    this.classList.add('hidden');
    spinSpinner('math-spinner', mathQuestions, selectedQuestion => {
        if (selectedReadingQuestion) {
            showFinalQuestion(selectedReadingQuestion, selectedQuestion);
        } else {
            selectedMathQuestion = selectedQuestion;
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
