const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    // 1. Generate a random number from 0 to 2 for the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // 2. Determine the winner
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // 3. Update the text on the screen
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // 4. Update the score and change text colors based on the result
    if (result === "YOU WIN!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.style.color = "#00ffcc"; // Neon teal for win
    } else if (result === "YOU LOSE!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.style.color = "#ff4444"; // Red for loss
    } else {
        resultDisplay.style.color = "#ffffff"; // White for tie
    }
}