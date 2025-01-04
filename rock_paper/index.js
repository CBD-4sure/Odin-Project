console.log("hello");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){

    let a = Math.random();
    if (a <= 0.3){
        return "rock";
    }
    else if (a < 0.6 && a > 0.3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Whats your choice?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == "rock" && computerChoice == "paper"){
        
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){

    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){

    }
    else{
        console.log("Draw");

    }

}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
  
console.log(getComputerChoice());
console.log(getHumanChoice());