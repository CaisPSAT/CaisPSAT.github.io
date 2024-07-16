// script.js

// Mock data for questions (replace with your actual questions)
const questions = {
    'reading-writing': {
        question: 'Sample Reading & Writing Question?',
        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
        explanation: 'Explanation for the sample question.'
    },
    'math': {
        question: 'Sample Math Question?',
        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
        explanation: 'Explanation for the sample question.'
    }
};

// Update question text in the boxes
function updateQuestionText(category) {
    const questionBox = document.getElementById(`${category}-box`);
    questionBox.querySelector('.question-text').textContent = questions[category].question;

    const answers = questionBox.querySelectorAll('.answer p');
    answers.forEach((answer, index) => {
        answer.textContent = questions[category].answers[index];
    });

    const explanation = questionBox.querySelector('.explanation');
    explanation.textContent = questions[category].explanation;
}

// Event listener for Begin button
document.getElementById('begin-button').addEventListener('click', function() {
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    updateQuestionText('reading-writing');
    updateQuestionText('math');
});

// Event listener for expanding Reading & Writing box
document.getElementById('expand-reading-writing').addEventListener('click', function() {
    document.getElementById('math-box').classList.add('hidden');
    document.getElementById('reading-writing-box').classList.add('expanded');
});

// Event listener for expanding Math box
document.getElementById('expand-math').addEventListener('click', function() {
    document.getElementById('reading-writing-box').classList.add('hidden');
    document.getElementById('math-box').classList.add('expanded');
});

// Event listener for collapsing Reading & Writing box
document.getElementById('reading-writing-box').addEventListener('click', function() {
    this.classList.remove('expanded');
    document.getElementById('math-box').classList.remove('hidden');
});

// Event listener for collapsing Math box
document.getElementById('math-box').addEventListener('click', function() {
    this.classList.remove('expanded');
    document.getElementById('reading-writing-box').classList.remove('hidden');
});

// Countdown timer for next set of questions
function updateCountdown() {
    const now = new Date();
    const hoursLeft = 24 - now.getHours();
    const minutesLeft = 60 - now.getMinutes();
    const secondsLeft = 60 - now.getSeconds();

    const countdown = document.getElementById('countdown');
    countdown.textContent = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;

    setTimeout(updateCountdown, 60000); // Update every second
}

updateCountdown(); // Start countdown

// New code for handling answer selection, checking, and revealing
document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    const explanation = document.querySelector('.explanation');
    const checkButton = document.querySelector('.check-button');
    const revealButton = document.querySelector('.reveal-button');

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove selected class from all answers
            answers.forEach(a => a.classList.remove('selected'));
            // Add selected class to the clicked answer
            answer.classList.add('selected');
        });
    });

    checkButton.addEventListener('click', function() {
        answers.forEach(answer => {
            const dot = answer.querySelector('.dot');
            if (answer.classList.contains('selected')) {
                if (answer.id === 'answer1') {
                    dot.classList.add('correct');
                } else {
                    dot.classList.add('incorrect');
                }
            }
        });

        // Show explanation if correct answer is selected
        if (document.querySelector('.selected') && document.querySelector('.selected').id === 'answer1') {
            explanation.style.filter = 'none'; // Remove blur
        }
    });

    revealButton.addEventListener('click', function() {
        answers.forEach(answer => {
            const dot = answer.querySelector('.dot');
            if (answer.id === 'answer1') {
                dot.classList.add('correct');
            } else {
                dot.classList.add('incorrect');
            }
        });

        // Show explanation for all answers
        explanation.style.filter = 'none'; // Remove blur
    });
});
