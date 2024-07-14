document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const spinBtn = document.getElementById('spin-btn');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const hideAnswerBtn = document.getElementById('hide-answer-btn');
    const nextQuestionsBtn = document.getElementById('next-questions-btn');
    
    const titleScreen = document.getElementById('title-screen');
    const questionScreen = document.getElementById('question-screen');
    const questionDisplay = document.getElementById('question-display');
    const answerDisplay = document.getElementById('answer-display');
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    
    // Manually input your questions here
    const mathQuestions = [
        { question: "What is 2 + 2?", answer: "The answer is 4.", explanation: "Basic addition." },
        { question: "Solve for x: 5x = 25", answer: "The answer is 5.", explanation: "Divide both sides by 5." },
        { question: "What is the square root of 64?", answer: "The answer is 8.", explanation: "8 * 8 = 64." }
    ];

    const readingQuestions = [
        { question: "What is the main idea of the passage?", answer: "The main idea is...", explanation: "This is the core message." },
        { question: "Identify the author's tone in the given paragraph.", answer: "The tone is...", explanation: "Based on the language used." },
        { question: "Which of the following best describes the purpose of the passage?", answer: "The purpose is...", explanation: "The reason why it was written." }
    ];

    // Function to get daily index
    function getDailyIndex(arrayLength) {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        return dayOfYear % arrayLength;
    }

    // Function to get daily question
    function getDailyQuestion(questionsArray) {
        const index = getDailyIndex(questionsArray.length);
        return questionsArray[index];
    }

    startBtn.addEventListener('click', function() {
        titleScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    });

    spinBtn.addEventListener('click', function() {
        const dailyMathQuestion = getDailyQuestion(mathQuestions);
        const dailyReadingQuestion = getDailyQuestion(readingQuestions);

        questionText.textContent = `${dailyMathQuestion.question}\n\n${dailyReadingQuestion.question}`;
        showAnswerBtn.classList.remove('hidden');

        questionDisplay.classList.remove('hidden');
    });

    showAnswerBtn.addEventListener('click', function() {
        const dailyMathQuestion = getDailyQuestion(mathQuestions);
        const dailyReadingQuestion = getDailyQuestion(readingQuestions);

        answerText.textContent = `${dailyMathQuestion.answer} - ${dailyMathQuestion.explanation}\n\n${dailyReadingQuestion.answer} - ${dailyReadingQuestion.explanation}`;
        answerDisplay.classList.remove('hidden');
        showAnswerBtn.classList.add('hidden');
        nextQuestionsBtn.classList.remove('hidden');
    });

    hideAnswerBtn.addEventListener('click', function() {
        answerDisplay.classList.add('hidden');
        showAnswerBtn.classList.remove('hidden');
    });

    nextQuestionsBtn.addEventListener('click', function() {
        questionScreen.classList.add('hidden');
        // You can add additional functionality here if needed
    });
});
