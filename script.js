// script.js
document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "I like gardening.",
        "I am an engineering student and like to code.",
        "I like trying different varieties of food.",
        "I like photography."
    ];

    let currentFactIndex = 0;
    const factsContainer = document.getElementById('fun-fact');
    const revealButton = document.getElementById('reveal-fact');

    revealButton.addEventListener('click', () => {
        factsContainer.textContent = facts[currentFactIndex];
        currentFactIndex = (currentFactIndex + 1) % facts.length;
    });
});

