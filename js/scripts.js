//store labels in the constants
const messageBanner = document.querySelector("#messageBanner");
const gameCountLabel = document.querySelector("#gameCountLabel");
const userScoreLabel = document.querySelector("#userScoreLabel");
const computerScoreLabel = document.querySelector("#computerScoreLabel");
const compChoice = document.querySelector("#whatComputerPicked");
const buttons = document.querySelectorAll(".buttons");


//game variables
let userScore = 0;
let computerScore = 0;
let gameCount = 0;


//make a random choice for the computer
function getComputerChoice() {
    const availableChoices = ["Rock", "Paper", "Scissors"];
    return availableChoices[Math.floor(Math.random() * 3)];
}

Array.from(buttons).forEach(button =>
    button.addEventListener("click", userSelect));


//execution of the game after a button is pressed
function userSelect(event) {
    if (gameCount < 5) {
        const usrChoice = event.target;
        let computerChoice = getComputerChoice();
        compareVsUser(usrChoice.value, computerChoice); //execute game logic
        compChoice.innerText = computerChoice; //inform user of the computer choice
        gameCountLabel.innerText = gameCount; //update game count label
        userScoreLabel.innerText = userScore; //update user score label
        computerScoreLabel.innerText = computerScore; //update computer score label
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


//game logic
function compareVsUser(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        messageBanner.innerText = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        messageBanner.innerText = "You Lose! Paper beats Rock";
        computerScore++;
        gameCount++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        messageBanner.innerText = "You Win! Rock beats Scissors";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        messageBanner.innerText = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        messageBanner.innerText = "You Win! Paper beats Rock";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        messageBanner.innerText = "You Lose! Scissors beat Paper";
        computerScore++;
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        messageBanner.innerText = "It's a draw!";
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        messageBanner.innerText = "You Win! Scissors beat Paper";
        userScore++;
        gameCount++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        messageBanner.innerText = "You Lose! Rock beats Scissors";
        computerScore++;
        gameCount++;
    } 
}




