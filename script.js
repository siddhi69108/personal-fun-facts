// script.js
document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Enthusiast of architecture and nature, with a love for palaces and gardens.",
        "Enjoys coastal environments, particularly beaches.",
        "Appreciates observing puppies and fishes, indicating a fondness for animals from a distance."
    ];

    const factsContainer = document.getElementById('fun-facts');

    facts.forEach(fact => {
        const factElement = document.createElement('div');
        factElement.className = 'fact';
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
});
