let humanScore = 0, computerScore = 0;
const WIN_CONDITION = 5;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return `Tie! you both threw ${humanChoice}`;
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") 
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore ++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    } 
    else{
        humanScore ++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
    announcementBox.textContent = ``;
}

const controls = document.querySelector("#controls");
const scoreboard = document.querySelector("#scoreboard");
const announcementBox = document.querySelector("#announcementBox");
controls.addEventListener("click", (event) => {
    const target = event.target;
    if (target.id != "rock" && target.id != "paper" && target.id != "scissors"){
        return;
    }
    if (humanScore >= WIN_CONDITION){
        resetGame();
    } else if (computerScore >= WIN_CONDITION){
        resetGame();
    };
    announcementBox.textContent = playRound(target.id, getComputerChoice());
    scoreboard.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
})
