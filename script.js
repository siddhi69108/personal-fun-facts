document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Enthusiast of architecture and nature, with a love for palaces and gardens.",
        "Enjoys coastal environments, particularly beaches.",
        "Appreciates observing puppies and fishes, indicating a fondness for animals from a distance."
    ];

    let currentFactIndex = 0;
    const factsContainer = document.getElementById('fun-fact');
    const revealButton = document.getElementById('reveal-fact');

    revealButton.addEventListener('click', () => {
        factsContainer.textContent = facts[currentFactIndex];
        currentFactIndex = (currentFactIndex + 1) % facts.length;
    });
});
