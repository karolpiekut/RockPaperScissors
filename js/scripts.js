//store labels in the constants
const messageBanner = document.querySelector("#messageBanner");
const gameCountLabel = document.querySelector("#gameCountLabel");
const userScoreLabel = document.querySelector("#userScoreLabel");
const computerScoreLabel = document.querySelector("#computerScoreLabel");
const compChoice = document.querySelector("#whatComputerPicked");

//game variables
let userScore = 0;
let computerScore = 0;
let gameCount = 0;

//make a random choice for the computer
function getComputerChoice() {
    const availableChoices = ["Rock", "Paper", "Scissors"];
    return availableChoices[Math.floor(Math.random() * 3)];
}

//game logic
function compareVsUser(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        messageBanner.innerHTML = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        messageBanner.innerHTML = "You Lose! Paper beats Rock";
        computerScore++;
        gameCount++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        messageBanner.innerHTML = "You Win! Rock beats Scissors";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        messageBanner.innerHTML = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        messageBanner.innerHTML = "You Win! Paper beats Rock";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        messageBanner.innerHTML = "You Lose! Scissors beat Paper";
        computerScore++;
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        messageBanner.innerHTML = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        messageBanner.innerHTML = "You Win! Scissors beat Paper";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        messageBanner.innerHTML = "You Lose! Rock beats Scissors";
        computerScore++;
        gameCount++;
    }
}


//execution of the game after a button is pressed
function userSelect(par) {
    if (gameCount < 5) {
        let computerChoice = getComputerChoice();
        compareVsUser(par, computerChoice); //execute game logic
        compChoice.innerHTML = computerChoice; //inform user of the computer choice
        gameCountLabel.innerHTML = gameCount; //update game count label
        userScoreLabel.innerHTML = userScore; //update user score label
        computerScoreLabel.innerHTML = computerScore; //update computer score label
    } else if (gameCount === 5 && userScore > computerScore) { //a message when the user wins
        alert("You have won the game!")
        location.reload();
    } else if (gameCount === 5 && userScore < computerScore) { //a message when the user loses
        alert("You have lost the game :(")
        location.reload();
    } else if (gameCount === 5 && userScore === computerScore) { //a message when it's a draw
        alert("It's a draw!")
        location.reload();

    }

}