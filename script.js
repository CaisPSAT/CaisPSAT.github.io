// script.js

// Array of questions, answers, and explanations
const questions = [
    {
        question: "What is 2 + 2?",
        answer: "4",
        explanation: "Adding 2 and 2 results in 4."
    },
    {
        question: "What is the capital of France?",
        answer: "Paris",
        explanation: "The capital of France is Paris."
    },
    {
        question: "What is the square root of 16?",
        answer: "4",
        explanation: "The square root of 16 is 4."
    }
    // Add more questions as needed
];

document.getElementById('start-button').addEventListener('click', function() {
    // Hide title screen and show question screen
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');

    // Select a random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    // Display the question
    document.getElementById('question').textContent = randomQuestion.question;
    document.getElementById('answer').textContent = randomQuestion.answer;
    document.getElementById('explanation').textContent = randomQuestion.explanation;
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
