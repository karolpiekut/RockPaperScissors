const messageBanner = document.querySelector("#messageBanner");
const gameCountLabel = document.querySelector("#gameCountLabel");
const userScoreLabel = document.querySelector("#userScoreLabel");
const computerScoreLabel = document.querySelector("#computerScoreLabel");
const compChoice = document.querySelector("#whatComputerPicked");

function userSelect(par) {

    let userScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    let computerChoice = getComputerChoice();

    function getComputerChoice() {
        const availableChoices = ["Rock", "Paper", "Scissors"];
        return availableChoices[Math.floor(Math.random() * 3)];
    }

    function compareVsUser(playerSelection, computerSelection) {
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            messageBanner.innerHTML = "It's a draw!";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            messageBanner.innerHTML = "You Lose! Paper beats Rock";
            computerScore++;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            messageBanner.innerHTML = "You Win! Rock beats Scissors";
            userScore++;
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            messageBanner.innerHTML = "It's a draw!";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            messageBanner.innerHTML = "You Win! Paper beats Rock";
            userScore++;
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            messageBanner.innerHTML = "You Lose! Scissors beat Paper";
            computerScore++;
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            messageBanner.innerHTML = "It's a draw!";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            messageBanner.innerHTML = "You Win! Scissors beat Paper";
            userScore++;
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            messageBanner.innerHTML = "You Lose! Rock beats Scissors";
            computerScore++;
        }
    }

    gameCount ++;
    compareVsUser(par, computerChoice);
    compChoice.innerHTML = computerChoice;
    gameCountLabel.innerHTML = gameCount;
    userScoreLabel.innerHTML = userScore;
    computerScoreLabel.innerHTML = computerScore;

}