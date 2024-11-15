// script.js
document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Enthusiast of architecture and nature, with a love for palaces and gardens.",
        "Enjoys coastal environments, particularly beaches.",
        "Appreciates observing puppies and fishes, indicating a fondness for animals from a distance."
    ];

    const factsContainer = document.getElementById('fun-facts');
    const revealButton = document.getElementById('reveal-facts');

    revealButton.addEventListener('click', () => {
        factsContainer.classList.toggle('hidden');
        if (!factsContainer.classList.contains('hidden')) {
            factsContainer.innerHTML = ''; // Clear previous facts if any
            facts.forEach(fact => {
                const factElement = document.createElement('div');
                factElement.className = 'fact';
                factElement.textContent = fact;
                factsContainer.appendChild(factElement);
            });
        }
    });
});
