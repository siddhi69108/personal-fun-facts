// script.js
document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "I like architecture and nature, with a love for palaces and gardens.",
        "I like coastal environments, particularly beaches.",
        "I like observing puppies and fishes, indicating a fondness for animals from a distance."
    ];

    const factsContainer = document.getElementById('fun-facts');

    facts.forEach(fact => {
        const factElement = document.createElement('div');
        factElement.className = 'fact';
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
});
