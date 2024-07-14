// script.js

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
});

document.getElementById('reading-spin-button').addEventListener('click', function() {
    this.style.display = 'none';
    spinSpinner('reading-spinner', readingQuestions, selectedQuestion => {
        if (selectedMathQuestion) {
            showFinalQuestion(selectedQuestion, selectedMathQuestion);
        } else {
            selectedReadingQuestion = selectedQuestion;
        }
    });
});

document.getElementById('math-spin-button').addEventListener('click', function() {
    this.style.display = 'none';
    spinSpinner('math-spinner', mathQuestions, selectedQuestion => {
        if (selectedReadingQuestion) {
            showFinalQuestion(selectedReadingQuestion, selectedQuestion);
        } else {
            selectedMathQuestion = selectedQuestion;
        }
    });
});

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

function spinSpinner(spinnerId, questions, callback) {
    const spinner = document.getElementById(spinnerId);
    spinner.innerHTML = '';
    shuffleArray(questions);
    questions.slice(0, 5).forEach(q => {
        const div = document.createElement('div');
        div.textContent = q.question;
        spinner.appendChild(div);
    });
}

function showFinalQuestion(readingQuestion, mathQuestion) {
    const finalQuestionContainer = document.getElementById('final-question-container');
    document.getElementById('question').textContent = `Reading: ${readingQuestion.question}\nMath: ${mathQuestion.question}`;
    document.getElementById('answer').textContent = `Reading Answer: ${readingQuestion.answer}\nMath Answer: ${mathQuestion.answer}`;
    document.getElementById('explanation').textContent = `Reading Explanation: ${readingQuestion.explanation}\nMath Explanation: ${mathQuestion.explanation}`;
    finalQuestionContainer.classList.remove('hidden');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Array of questions, answers, and explanations
let selectedReadingQuestion, selectedMathQuestion;
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
    { question: "What is the area of a square with side length 4?", answer: "16", explanation: "The area of a square is side length squared, so 4 squared is 16." },
    { question: "What is 20 divided by 4?", answer: "5", explanation: "Dividing 20 by 4 results in 5." }
    // Add more math questions as needed
];
