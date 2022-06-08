function computerPlay() {
    let x = Math.floor((Math.random() * 3) + 1);
    return x;
}
function playerPlay() {
    let person = prompt("Input Rock, Paper, or Scissor");
    while (true) {
        switch (person.toUpperCase()) {
            case "ROCK":
                return 1;
                break;
            case "PAPER":
                return 2;
                break;
            case "SCISSOR":
                return 3;
                break;
        } 
        person = prompt("Invalid, please input Rock, Paper, or Scissor");
    }
}
function playRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        return "You Tie, you Matched your opponent";
    } else if ((playerSelection === 1) && (computerSelection === 2)) {
        return "You Lost, Paper beats Rock";
    } else if ((playerSelection === 2) && (computerSelection === 3)) {
        return "You Lost, Scissor beats Paper";
    } else if ((playerSelection === 3) && (computerSelection === 1)) {
        return "You lost, Rock beats Scissor";
    } else if ((computerSelection === 1) && (playerSelection === 2)) {
        return "You Win, Paper beats Rock";
    } else if ((computerSelection === 2) && (playerSelection === 3)) {
        return "You Win, Scissor beats Paper";
    } else {
        return "You Win, Rock beats Scissor";
    }
}
console.log(playRound(playerPlay(), computerPlay()));
