function getComputerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choice.length);
    let computerChoice = choice[random];
    return computerChoice.toLowerCase();
}

function getPlayerChoice(){
    let player = prompt("Whats your pick")
    let playerChoice = player.toLowerCase();
    return playerChoice;
}


function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a draw..");
    }if(playerSelection=="rock" && computerSelection=="scissors"){
        console.log("Congrats You Win!! rock beats scissors");
    }if(playerSelection=="paper" && computerSelection=="rock"){
        console.log("Congrats You Win!! paper beats rock");
    }if(playerSelection=="scissors" && computerSelection=="paper"){
        console.log("Congrats you win!! scisors beats paper");
    }if(playerSelection=="scissors" && computerSelection=="rock"){
        console.log("Aww you lose!! rock beats scissors");
    }if(playerSelection=="paper" && computerSelection=="scissors"){
        console.log("Aww you lose!! scisors beats paper");
    }if(playerSelection=="rock" && computerSelection=="paper"){
        console.log("Aww you lose!! paper beats rock");
    }
    
        
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection,computerSelection);
    
    


