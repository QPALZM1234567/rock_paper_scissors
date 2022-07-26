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

person = document.querySelector(".result .you");
computer = document.querySelector(".result .com");
personScore = 0;
computerScore = 0; //variables for scores
person.textContent = personScore;
computer.textContent = computerScore;
function handleClick(e) {
    alert(playRound(e.target.textContent, getComputerChoice()));
    if (personScore === 5) {
        alert("You win the series!!!!! WOOOOOO");
        personScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("The Computer won the series... better luck next time");
        personScore = 0;
        computerScore = 0;
    }
    person.textContent = personScore;
    computer.textContent = computerScore;
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
            computerScore++;
            return "You lose! Paper beats Rock";
        } else {
            personScore++;
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "ROCK") {
            personScore++;
            return "You win! Paper beats Rock";
        } else {
            computerScore++;
            return "You lose! Scissors beat Paper"
        }
    } else {
        if (computerSelection.toUpperCase() === "PAPER") {
            personScore++;
            return "You win! Scissors beat Paper";
        } else {
            computerScore++;
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




