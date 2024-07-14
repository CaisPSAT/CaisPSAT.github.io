// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for Begin button
    document.getElementById('begin-button').addEventListener('click', function() {
        document.getElementById('title-screen').classList.add('hidden');
        document.getElementById('question-screen').classList.remove('hidden');
    });

    // Countdown timer for next set of questions
    function updateCountdown() {
        const now = new Date();
        const hoursLeft = 24 - now.getHours();
        const minutesLeft = 60 - now.getMinutes();
        const secondsLeft = 60 - now.getSeconds();

        const countdown = document.getElementById('countdown');
        countdown.textContent = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;

        setTimeout(updateCountdown, 1000); // Update every second
    }

    updateCountdown(); // Start countdown

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
});
