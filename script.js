document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const titleScreen = document.getElementById('title-screen');
    const questionScreen = document.getElementById('question-screen');

    // Log a message when the DOM content is loaded
    console.log('DOM content loaded');

    startBtn.addEventListener('click', function() {
        // Log a message when the Start button is clicked
        console.log('Start button clicked');

        // Add or remove classes to transition between screens
        titleScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');

        // Log a message after the screen transition
        console.log('Transitioned to question screen');
    });
});
