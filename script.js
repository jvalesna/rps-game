

function playerChoice(choice){
    console.log(choice);
    switch(choice.id){
        case "btn-rock":
            document.getElementById("player-sign").innerHTML = "✊";
            break;
        case "btn-paper":
            document.getElementById("player-sign").innerHTML = "✋";
            break;
        case "btn-scissor":
            document.getElementById("player-sign").innerHTML = "✌";
            break;
    }
}