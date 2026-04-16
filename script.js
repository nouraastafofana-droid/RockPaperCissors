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

/*
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
    */





/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection, computerSelection, playRound(humanSelection, computerSelection));
*/

const rockBtn = document.querySelector("#rockId")
const paperBtn = document.querySelector("#paperId");
const scissorsBtn = document.querySelector("#scissId");
const displayResult = document.createElement("div");


function displayInDiv(obj){
    const result = playRound(obj, getComputerChoice());
    displayResult.textContent = result;
}

function playGame(e){
    //humanScore = 0 ;
    //computerScore = 0;

    //displayResult.textContent = result;

    if (humanScore === 5  || computerScore === 5){
        return;

    }

    const result = playRound(e, getComputerChoice());




    if ((humanScore === 5) && computerScore < 5 ){
        displayResult.textContent = result + "human score "+ humanScore + " vs computer score " + computerScore + "Congratulations, you win !";

    }
    else if ((computerScore===5) && (humanScore < 5)){
        displayResult.textContent = result + "human score "+ humanScore + " vs computer score " + computerScore + "You lose !";
    }
    else{
        displayResult.textContent = result + " current human score :  " + humanScore + " vs current computer score : "
        + computerScore;
    }


}




rockBtn.addEventListener("click", ()=> playGame("rock")
);
paperBtn.addEventListener("click", ()=> playGame("paper"));
scissorsBtn.addEventListener("click", ()=> playGame("scissors"));



document.body.appendChild(displayResult);
