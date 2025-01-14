document.addEventListener('DOMContentLoaded', function() {
    const contributions = [];
    const developers = [
        { name: 'Alice', coins: 0, level: 'Explorer' },
        { name: 'Bob', coins: 0, level: 'Explorer' },
        { name: 'Charlie', coins: 0, level: 'Explorer' }
    ];

    function publishContribution(developerName, contribution) {
        const developer = developers.find(dev => dev.name === developerName);
        if (developer) {
            contributions.push({ developer: developerName, contribution });
            developer.coins += 10; // Example coin reward
            updateDeveloperLevel(developer);
            updateLeaderboard();
        }
    }

    function updateDeveloperLevel(developer) {
        if (developer.coins >= 100) {
            developer.level = 'Visionary';
        } else if (developer.coins >= 50) {
            developer.level = 'Innovator';
        } else if (developer.coins >= 20) {
            developer.level = 'Contributor';
        } else {
            developer.level = 'Explorer';
        }
    }

    function updateLeaderboard() {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = '';
        const sortedDevelopers = developers.sort((a, b) => b.coins - a.coins);
        sortedDevelopers.forEach(dev => {
            const listItem = document.createElement('li');
            listItem.textContent = `${dev.name} - ${dev.coins} coins - ${dev.level}`;
            leaderboard.appendChild(listItem);
        });
    }

    function addTrainingSession(session) {
        const trainingSessions = document.getElementById('training-sessions');
        const listItem = document.createElement('li');
        listItem.textContent = session;
        trainingSessions.appendChild(listItem);
    }

    // Example usage
    publishContribution('Alice', 'Published a learning article');
    publishContribution('Bob', 'Shared a code snippet');
    addTrainingSession('JavaScript Basics - 2025-05-01');
});
