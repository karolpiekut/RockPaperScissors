//get random computer choice
function getComputerChoice() {
    const availableChoices = ["Rock", "Paper", "Scissors"];
    return availableChoices[Math.floor(Math.random() * 3)];
}

//logic draft
function compareVsUser(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You have lost this round!");
        computerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You have won this round!");
        userScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("it's a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You have won this round!");
        userScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You have lost this round!");
        computerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("it's a draw!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You have won this round!");
        userScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You have lost this round!");
        computerScore++;
    }

}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

console.log(rock);
console.log(paper);
console.log(scissors);



//console.log(`User choice: ${userChoice}`);

//const messageBanner = document.querySelector("#messageBanner");
//const gameCount = document.querySelector("#gameCount");
//const userScore = document.querySelector("#userScore");
//const computerScore = document.querySelector("#computerScore");






//work in progress
let userScore = 0;
let computerScore = 0;
let gameCount = 0;

let computerChoice = getComputerChoice();


/*

for (let i = 0; i < 5; i++) {
    console.log(compareVsUser(userChoice, getComputerChoice()));
}

*/



//console.log(`User score: ${userScore}`);
//console.log(`Computer score: ${computerScore}`);
//console.log(`Game count: ${gameCount}`);