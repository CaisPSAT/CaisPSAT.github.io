document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const spinBtn = document.getElementById('spin-btn');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const hideAnswerBtn = document.getElementById('hide-answer-btn');
    const nextQuestionsBtn = document.getElementById('next-questions-btn');
    
    const titleScreen = document.getElementById('title-screen');
    const questionScreen = document.getElementById('question-screen');
    const purchaseScreen = document.getElementById('purchase-screen');
    const questionDisplay = document.getElementById('question-display');
    const answerDisplay = document.getElementById('answer-display');
    const countdownTimer = document.getElementById('countdown-timer');

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
        answerText.textContent = `${dailyMathQuestion.answer} - ${dailyMathQuestion.explanation}\n\n${dailyReadingQuestion.answer} - ${dailyReadingQuestion.explanation}`;

        questionDisplay.classList.remove('hidden');
    });

    showAnswerBtn.addEventListener('click', function() {
        answerDisplay.classList.remove('hidden');
        showAnswerBtn.classList.add('hidden');
    });

    hideAnswerBtn.addEventListener('click', function() {
        answerDisplay.classList.add('hidden');
        showAnswerBtn.classList.remove('hidden');
    });

    nextQuestionsBtn.addEventListener('click', function() {
        questionScreen.classList.add('hidden');
        purchaseScreen.classList.remove('hidden');
        startCountdown(86400); // 24 hours in seconds
    });

    // Event listeners for purchase buttons
    document.getElementById('buy-one-extra').addEventListener('click', function() {
        alert('Purchased 1 extra set of questions for $0.99!');
        // Implement your payment logic here
    });

    document.getElementById('buy-five-extra').addEventListener('click', function() {
        alert('Purchased 5 extra sets of questions for $4.99!');
        // Implement your payment logic here
    });

    document.getElementById('subscribe-five').addEventListener('click', function() {
        alert('Subscribed to 5 extra sets daily for $4.99/month!');
        // Implement your payment logic here
    });

    document.getElementById('subscribe-ten').addEventListener('click', function() {
        alert('Subscribed to 10 extra sets daily for $9.99/month!');
        // Implement your payment logic here
    });

    // Countdown timer function
    function startCountdown(seconds) {
        let remainingTime = seconds;
        const interval = setInterval(() => {
            if (remainingTime <= 0) {
                clearInterval(interval);
                countdownTimer.textContent = "00:00:00";
            } else {
                remainingTime--;
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;
                countdownTimer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    }
});
