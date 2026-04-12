console.log("Hello World")

//let humanScore = 0;
//let computerScore = 0;

function getComputerChoice(){

    const rand = Math.random()
    const seuil = 1 / 3

    if (rand < seuil){
        return "rock"
    }
    else if (rand > (2 * seuil)){
        return 'scissors'
    }
    else{
        return 'paper'
    }

}

function getHumanChoice(){

    let userEntry = prompt(`Please, choose between "rock", "paper", "scissors" and enter it !`);
    return userEntry;

}
/*
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win ! "+ humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "You lose ! "+ computerChoice + " beats "+ humanChoice;
    }
    else if (humanChoice === computerChoice ){
        return "Nobody wins here !"
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "You lose ! " + computerChoice + " beats " + humanChoice;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win ! " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win ! " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You lose ! "+ computerChoice+" beats "+ humanChoice;
    }
    else
        return null;
}
*/

let humanScore = 0 ;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")){
            humanScore++;
            return "You win ! " + humanChoice + " beats " + computerChoice
    }
    else if(humanChoice === computerChoice){
        return "Nobody wins here !"
    }
    else{
        computerScore++;
        return "You lose ! " + computerChoice + " beats " + humanChoice
    }


}

function playGame(){
    humanScore = 0 ;
    computerScore = 0;


    for (let i = 0 ; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));


    }

    if (humanScore < computerScore){
        return "human score : " + humanScore + " vs computer score " + computerScore +  "| You lose !"
    }
    else if (humanScore === computerScore){
        return "human score : " + humanScore + " vs computer score " + computerScore +  "| Nobody wins !"
    }
    else{
        return "human score : " + humanScore + " vs computer score " + computerScore +  "| Congrats, You win !"
    }

}

console.log(playGame())

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection, computerSelection, playRound(humanSelection, computerSelection));
*/
