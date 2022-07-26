function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function handleClick(e) {
    alert(playRound(e.target.textContent, getComputerChoice()));
}

btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a tie! Both players played " + playerSelection.toUpperCase(); 
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beat Paper"
        }
    } else {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You win! Scissors beat Paper";
        } else {
            return "You lose! Rock beats Scissors"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your play?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}




