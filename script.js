let playerSign;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function playerChoice(choice){

    computerChoice();
    switch(choice.id){
        case "btn-rock":
            document.getElementById("player-sign").innerHTML = "✊";
            playerSign = 0;
            break;
        case "btn-paper":
             document.getElementById("player-sign").innerHTML = "✋";
            playerSign = 1;

            break;
        case "btn-scissor":
            document.getElementById("player-sign").innerHTML = "✌";
            playerSign = 2;
            break;
    }

    let result = gameMechanics(playerSign,computerChoice());
    if(result=="draw"){
        document.getElementById("round-counter").innerHTML = "Round "+roundCounter+": Draw";
    }
    if(result=="player"){
        document.getElementById("round-counter").innerHTML = "Round "+roundCounter+": You win this round!";
    }
    if(result=="computer"){
        document.getElementById("round-counter").innerHTML = "Round "+roundCounter+": You lose this round!";
    }



    if(playerScore == 5){
        alert("You win!");
        playerScore = 0;
        computerScore = 0;
        roundCounter = 1;
        document.getElementById("round-counter").innerHTML = "Choose your weapon";
        document.getElementById("player-sign").innerHTML = "❔";
        document.getElementById("computer-sign").innerHTML = "❔";


    }
    else if(computerScore == 5)
    {
        alert("You lose!");
        playerScore = 0;
        computerScore = 0;
        roundCounter = 1;
        document.getElementById("round-counter").innerHTML = "Choose your weapon";
        document.getElementById("player-sign").innerHTML = "❔";
        document.getElementById("computer-sign").innerHTML = "❔";
    }
    document.getElementById("player-score").innerHTML = "Score : "+playerScore;
    document.getElementById("computer-score").innerHTML = "Score : "+computerScore;


}
function computerChoice(){
    let compSign = Math.floor(Math.random() * 3);
    switch(compSign){
        case 0:
            document.getElementById("computer-sign").innerHTML = "✊";
            break;
        case 1:
            document.getElementById("computer-sign").innerHTML = "✋";
            break;
        case 2:
            document.getElementById("computer-sign").innerHTML = "✌";
            break;
    }

    return compSign;
}

function gameMechanics(playerChoice,compChoice){
    let result;
    if(playerChoice == 0 && compChoice == 0){
        result = "draw";
    }
    if(playerChoice == 0 && compChoice == 1){
        computerScore++;
        result = "computer";
    }
    if(playerChoice == 0 && compChoice == 2){
        playerScore++;
        result = "player"
    }
    if(playerChoice == 1 && compChoice == 0){
        playerScore++;
        result = "player"
    }
    if(playerChoice == 1 && compChoice == 1){
        result = "draw";
    }
    if(playerChoice == 1 && compChoice == 2){
        computerScore++;
        result = "computer";
    }
    if(playerChoice == 2 && compChoice == 0){
        computerScore++;
        result = "computer";
    }
    if(playerChoice == 2 && compChoice == 1){
        playerScore++;
        result = "player"
    }
    if(playerChoice == 2 && compChoice == 2){
        result = "draw";
    }

    roundCounter++;
    return result;
}