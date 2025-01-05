let humanScore = 0;
let computerScore = 0;
let k = 5;

function getComputerChoice(){

    let a = Math.random();
    if (a <= 0.3){
        console.log("Computer choice: Rock");
        return "rock";
    }
    else if (a < 0.6 && a > 0.3){
        console.log("Computer choice: Paper");
        return "paper";
    }
    else{
        console.log("Computer choice: Scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Whats your choice?");
    choice = choice.toLowerCase();
    let a = ["rock","paper","scissors"];
    if (a.includes(choice)){
        console.log("Your choice:", choice);
        return choice;
    }
    else{
        return getHumanChoice();
    }
   
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            computerScore ++;
            console.log("Paper wins over rock");
        }
        else if (computerChoice == "scissors"){
            humanScore ++;
            console.log("Rock wins over scissors")
        }
        else{
            console.log("Draw");
        }
    }
    else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            humanScore ++;
            console.log("Paper wins over rock");
        }
        else if (computerChoice == "scissors"){
            computerScore ++;
            console.log("Scissors wins over paper")
        }
        else{
            console.log("Draw");
        }
    }
    else{
        if (computerChoice == "rock"){
            computerScore ++;
            console.log("Rock wins over scissors");
        }
        else if (computerChoice == "paper"){
            humanScore ++;
            console.log("Scissors wins over paper")
        }
        else{
            console.log("Draw");
        }

    }
    console.log("Your score:",humanScore);
    console.log("Computer score:",computerScore);

}
 
function playGame(){

    while (k > 0){
        console.log("Round",6-k);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        k --;
    }
    if (humanScore > computerScore){
        console.log("You Win!!");
    }
    else{
        console.log("Computer Wins!!");
    }

}

playGame();