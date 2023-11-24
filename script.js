let wins = 0;
let ties = 0;
let losses = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if (userChoice === computerChoice) {
        ties++;
        document.getElementById('ties').innerText = ties;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
        document.getElementById('wins').innerText = wins;
    } else {
        losses++;
        document.getElementById('losses').innerText = losses;
    }
}