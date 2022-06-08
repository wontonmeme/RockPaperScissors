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
        return "You tie, you Matched your opponent";
    } else if ((playerSelection === 1) && (computerSelection === 2)) {
        return "You lost, Paper beats Rock";
    } else if ((playerSelection === 2) && (computerSelection === 3)) {
        return "You lost, Scissor beats Paper";
    } else if ((playerSelection === 3) && (computerSelection === 1)) {
        return "You lost, Rock beats Scissor";
    } else if ((computerSelection === 1) && (playerSelection === 2)) {
        return "You win, Paper beats Rock";
    } else if ((computerSelection === 2) && (playerSelection === 3)) {
        return "You win, Scissor beats Paper";
    } else {
        return "You win, Rock beats Scissor";
    }
}


function game() {
    let x = 0;
    let y = 0;
    let ctally = 0;
    let ptally = 0;
    for (let i = 0; i < 5; i++) {
        x = playerPlay();
        y = computerPlay();
        console.log(playRound(x,y));
        if (((x === 2) && (y === 1)) || 
        ((x === 3) && (y === 2)) ||
        ((x === 1) && (y === 3))) ptally++;
        else if (x === y) ;
        else ctally++;
    }
    console.log("Player won", ptally, " Computer won", ctally);
}
game();