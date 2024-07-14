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

// Function to get the current date in CST
function getCSTDate() {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000;
    const utcTime = now.getTime() + utcOffset;
    const cstOffset = -6 * 3600000; // CST is UTC-6
    return new Date(utcTime + cstOffset);
}

// Function to generate a seed based on the current date in CST
function getDailySeed() {
    const date = getCSTDate();
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

// Function to get today's question index based on the daily seed
function getTodayQuestionIndex(seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % questions.length;
}

// Function to get today's question
function getTodayQuestion() {
    const seed = getDailySeed();
    const questionIndex = getTodayQuestionIndex(seed);
    return questions[questionIndex];
}

// Function to update the question on the screen
function updateQuestion() {
    const todayQuestion = getTodayQuestion();
    document.getElementById('question').textContent = todayQuestion.question;
    document.getElementById('answer').textContent = todayQuestion.answer;
    document.getElementById('explanation').textContent = todayQuestion.explanation;
}

// Event listener for the start button
document.getElementById('start-button').addEventListener('click', function() {
    // Hide title screen and show question screen
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    // Update the question
    updateQuestion();
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

// Function to check if it's midnight
function checkMidnight() {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        location.reload(); // Reload the page at midnight
    }
}

// Set interval to check the time every minute
setInterval(checkMidnight, 60000);

// Initial question update when the script loads
updateQuestion();
