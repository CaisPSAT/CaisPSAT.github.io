// script.js

// Array of questions, answers, and explanations
const questions = [
    {
        category: "reading-writing",
        question: "Question 1 for Reading & Writing",
        answer: "Answer 1 for Reading & Writing",
        explanation: "Explanation 1 for Reading & Writing"
    },
    {
        category: "reading-writing",
        question: "Question 2 for Reading & Writing",
        answer: "Answer 2 for Reading & Writing",
        explanation: "Explanation 2 for Reading & Writing"
    },
    {
        category: "reading-writing",
        question: "Question 3 for Reading & Writing",
        answer: "Answer 3 for Reading & Writing",
        explanation: "Explanation 3 for Reading & Writing"
    },
    {
        category: "reading-writing",
        question: "Question 4 for Reading & Writing",
        answer: "Answer 4 for Reading & Writing",
        explanation: "Explanation 4 for Reading & Writing"
    },
    {
        category: "reading-writing",
        question: "Question 5 for Reading & Writing",
        answer: "Answer 5 for Reading & Writing",
        explanation: "Explanation 5 for Reading & Writing"
    },
    {
        category: "math",
        question: "Question 1 for Math",
        answer: "Answer 1 for Math",
        explanation: "Explanation 1 for Math"
    },
    {
        category: "math",
        question: "Question 2 for Math",
        answer: "Answer 2 for Math",
        explanation: "Explanation 2 for Math"
    },
    {
        category: "math",
        question: "Question 3 for Math",
        answer: "Answer 3 for Math",
        explanation: "Explanation 3 for Math"
    },
    {
        category: "math",
        question: "Question 4 for Math",
        answer: "Answer 4 for Math",
        explanation: "Explanation 4 for Math"
    },
    {
        category: "math",
        question: "Question 5 for Math",
        answer: "Answer 5 for Math",
        explanation: "Explanation 5 for Math"
    }
    // Add more questions as needed
];

// Function to shuffle questions array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to update question list in HTML
function updateQuestionList(category) {
    const questionList = document.getElementById(`${category}-questions`);
    questionList.innerHTML = ''; // Clear existing questions

    // Filter questions by category
    const filteredQuestions = questions.filter(q => q.category === category);

    // Shuffle filtered questions
    shuffle(filteredQuestions);

    // Display first 5 questions
    const visibleQuestions = filteredQuestions.slice(0, 5);

    // Create HTML for questions
    visibleQuestions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question.question;
        questionList.appendChild(li);
    });
}

// Event listener for the start button
document.getElementById('start-button').addEventListener('click', function() {
    // Hide title screen and show question screen
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    // Update question lists
    updateQuestionList('reading-writing');
    updateQuestionList('math');
});

// Event listener for the reading-writing spin button
document.getElementById('reading-writing-spin').addEventListener('click', function() {
    const questionList = document.getElementById('reading-writing-questions');
    questionList.classList.add('spin-down'); // Apply spinning animation
    this.classList.add('hidden'); // Hide the spin button
});

// Event listener for the math spin button
document.getElementById('math-spin').addEventListener('click', function() {
    const questionList = document.getElementById('math-questions');
    questionList.classList.add('spin-down'); // Apply spinning animation
    this.classList.add('hidden'); // Hide the spin button
});
