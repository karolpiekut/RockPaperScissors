function getComputerChoice() {
	const availableChoices = ["Rock", "Paper", "Scissors"];
	return availableChoices[Math.floor(Math.random() * 3)];
}

function compareVsUser(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You have lost this round!");
        computerScore ++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You have won this round!");
        userScore ++;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("it's a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You have won this round!");
        userScore ++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You have lost this round!");
        computerScore ++;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("it's a draw!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You have won this round!");
        userScore ++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You have lost this round!");
        computerScore ++;
    }

}

let userScore = 0;
let computerScore = 0;
let gameCount = 0;

computerChoice = getComputerChoice();
userChoice = "Rock";



for (let i = 0; i < 5; i++){
    console.log(compareVsUser(userChoice, getComputerChoice()));
}





//console.log(`User score: ${userScore}`);
//console.log(`Computer score: ${computerScore}`);
//console.log(`Game count: ${gameCount}`);