function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
       return "rock";
    } else if (selection == 1) {
       return "paper";
    } else {
       return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
           (playerSelection == "paper" && computerSelection == "rock") ||
           (playerSelection == "scissors" && computerSelection == "paper")) {

       return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
                 (playerSelection == "paper" && computerSelection == "scissors") ||
                 (playerSelection == "scissors" && computerSelection == "rock")) {

       return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else {
       return "It's a Tie!";
    }
}

function game(rounds) {
    console.log(newgame);
}

const newgame = document.getElementById('newgame');
const choices = document.querySelectorAll("button.choice");
choices.forEach((choice) => {
    choice.addEventListener("click", function(e) {
        console.log(e);
        console.log(choice.id);
    });
});

newgame.addEventListener("click", function() {game(5)});
