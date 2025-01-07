let humanScore = 0;
let computerScore = 0;
let k = 5;

function getComputerChoice(){

    let a = Math.random();
    if (a <= 0.3){
        console.log("Computer choice: Rock");
        return "Rock";
    }
    else if (a < 0.6 && a > 0.3){
        console.log("Computer choice: Paper");
        return "Paper";
    }
    else{
        console.log("Computer choice: Scissors");
        return "Scissors";
    }
}

function getHumanChoice(){
    
    const hChoice = document.getElementById('you');
    const btn_r = document.getElementById('r');
    const btn_p = document.getElementById('p');
    const btn_s = document.getElementById('s');
    
    btn_r.addEventListener('click',() => {
        hChoice.innerHTML = "Rock";
        playGame("Rock");
    });   
    btn_p.addEventListener('click',() => {
        hChoice.innerHTML = "Paper";
        playGame("Paper");
    });
    btn_s.addEventListener('click',() => {
        hChoice.innerHTML = "Scissors";
        playGame("Scissors");
    });
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    const cChoice = document.getElementById('comp');
    const yscore = document.getElementById('yscore');
    const cscore = document.getElementById('cscore');
    const res = document.getElementById('res');
    const you = document.getElementById('you_div');
    const com = document.getElementById('comp_div');
    
    cChoice.innerHTML = computerChoice;


    if (humanChoice == "Rock"){
        if (computerChoice == "Paper"){
            computerScore ++;
            console.log("Paper wins over rock");
            res.innerHTML = "👎";
            com.style.backgroundColor = "#D0F0C0";
            you.style.backgroundColor = "#FF474C";

        }
        else if (computerChoice == "Scissors"){
            humanScore ++;
            console.log("Rock wins over scissors");
            res.innerHTML = "✌️";
            com.style.backgroundColor = "#FF474C";
            you.style.backgroundColor = "#D0F0C0";

        }
        else{
            res.innerHTML = "Draw";
            console.log("Draw");
            com.style.backgroundColor = "white";
            you.style.backgroundColor = "white";

        }
    }
    else if(humanChoice == "Paper"){
        if (computerChoice == "rock"){
            humanScore ++;
            console.log("Paper wins over rock");
            res.innerHTML = "✌️";
            com.style.backgroundColor = "#FF474C";
            you.style.backgroundColor = "#D0F0C0";

        }
        else if (computerChoice == "Scissors"){
            computerScore ++;
            console.log("Scissors wins over paper");
            res.innerHTML = "👎";
            com.style.backgroundColor = "#D0F0C0";
            you.style.backgroundColor = "#FF474C";
        }
        else{
            res.innerHTML = "🤝";
            console.log("Draw");
            com.style.backgroundColor = "white";
            you.style.backgroundColor = "white";
        }
    }
    else{
        if (computerChoice == "Rock"){
            computerScore ++;
            console.log("Rock wins over scissors");
            res.innerHTML = "👎";
        }
        else if (computerChoice == "Paper"){
            humanScore ++;
            console.log("Scissors wins over paper")
            res.innerHTML = "✌️";
        }
        else{
            res.innerHTML = "Draw";
            console.log("🤝");
        }

    }
    yscore.innerHTML = "Your Score: " + humanScore;
    cscore.innerHTML = "Your Score: " + computerScore;
    console.log("Your score:",humanScore);
    console.log("Computer score:",computerScore);

}
 
function playGame(human){
    const res = document.getElementById('res');
    const comp = getComputerChoice();

    playRound(human,comp);

    if (humanScore == 5){
        console.log("You Win!!");
        res.innerHTML = "You Won!!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        console.log("Draw");
        res.innerHTML = "You Lost!!";
        humanScore = 0;
        computerScore = 0;
    }
}
getHumanChoice();
//alert("Rock Paper => GO TO CONSOLE TO PLAY (Press cmd/ctrl + option/shift + J");

