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
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare", explanation: "William Shakespeare wrote 'Romeo and Juliet'." },
    { question: "What is the area of a square with side length 4?", answer: "16", explanation: "The area of a square is side length squared, so 4 squared is 16." },
    { question: "What is 20 divided by 4?", answer: "5", explanation: "Dividing 20 by 4 results in 5." }
    // Add more reading questions as needed
];

const mathQuestions = [
    { question: "What is 3 x 5?", answer: "15", explanation: "Multiplying 3 and 5 results in 15." },
    { question: "What is the square root of 25?", answer: "5", explanation: "The square root of 25 is 5." },
    { question: "What is 10 - 3?", answer: "7", explanation: "Subtracting 3 from 10 results in 7." },
    { question: "What is the circumference of a circle with radius 3?", answer: "6π", explanation: "The circumference of a circle is calculated using the formula 2πr, where r is the radius." },
    { question: "What is 8 ÷ 2?", answer: "4", explanation: "Dividing 8 by 2 results in 4." }
    // Add more math questions as needed
];

// Add event listeners or other code as needed for additional functionality
