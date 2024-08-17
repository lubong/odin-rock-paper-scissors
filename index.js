function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: ").toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log(`Tie! you both threw ${humanChoice}`);
        return "tie";
    }
    else if ((humanChoice === "ROCK" && computerChoice === "PAPER") 
    || (humanChoice === "PAPER" && computerChoice === "SCISSORS")
    || (humanChoice === "SCISSORS" && computerChoice === "ROCK")){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "lose";
    } 
    else{
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "win";
    }
}

function playGame(){
    let humanScore = 0, computerScore = 0;
    console.log(`Game Started...`);
    console.log(`human: ${humanScore}, computer: ${computerScore}`);
    for (let i = 0; i < 2; i ++){
        switch (playRound(getHumanChoice(), getComputerChoice())) {
            case "win":
                humanScore++;
                break;
            case "lose":
                computerScore++;
            case "tie":
                break;               
        }
        console.log(`human: ${humanScore}, computer: ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log(`Game Result: You Win!`);
    } else if (humanScore < computerScore){
        console.log(`Game Result: You Lost!`);
    } else {
        console.log("Game Result: Tied!");
    }
    console.log(`Game Ended!`);

}

playGame();