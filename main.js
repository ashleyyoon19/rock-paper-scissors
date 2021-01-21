let computerSelection="";
let playerSelection="";
let playerPoints=0;
let computerPoints=0;

/*randomly generates number from 0-2. each number
represents rock, paper, or scissors respectively*/
function computerPlay(){
    const randNum=Math.floor(Math.random()*3);
    
    if(randNum==0){
        computerSelection="Rock";
    } else if (randNum==1){
        computerSelection="Paper";
    } else if (randNum==2){
        computerSelection="Scissors";
    }
    return computerSelection;
}

/*parameters: what player chose, what computer randomly generated.
with if-else statements, compares selections. determines whether
player or computer wins*/
function playRound(playerSelection, computerSelection){
    if(playerSelection==="Rock"){
        if(computerSelection==="Paper") {
            computerPoints++;
            return "You Lose! "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection==="Scissors"){
            playerPoints++;
            return "You Win! "+playerSelection+" beats "+computerSelection;
        } else {
            return "Draw!";
        }
    } else if(playerSelection==="Paper"){
        if(computerSelection==="Scissors") {
            computerPoints++;
            return "You Lose! "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection==="Rock"){
            playerPoints++;
            return "You Win! "+playerSelection+" beats "+computerSelection;
        } else{
            return "Draw!";
        }
    } else if(playerSelection==="Scissors"){
        if(computerSelection==="Rock") {
            computerPoints++;
            return "You Lose! "+computerSelection+" beats "+playerSelection;
        } else if(computerSelection==="Paper"){
            playerPoints++;
            return "You Win! "+playerSelection+" beats "+computerSelection;
        } else {
            return "Draw!";
        }
    }
}

/*function determines which button is clicked*/
function selectButton(buttons){

    //restarts game
    if(buttons.id==="restart"){
        playerPoints=0;
        computerPoints=0;
        document.getElementById("playerPoint").innerHTML=playerPoints;
        document.getElementById("compPoint").innerHTML=computerPoints;
        document.getElementById("playGame").innerHTML="";
    }

    //if button's id isn't "restart," then selection is made by player
    //and is stored accordingly
    if(buttons.id==="rock"){
        playerSelection="Rock";
        game();
    } else if(buttons.id==="paper"){
        playerSelection="Paper";
        game();
    } else if(buttons.id==="scissors"){
        playerSelection="Scissors";
        game();
    }
}

/*function calls computerPlay() method + prints text accordingly
(including the scores)*/
function game(){
    computerSelection=computerPlay();
    document.getElementById("playGame").innerHTML=playRound(playerSelection, computerSelection);
    document.getElementById("playerPoint").innerHTML=playerPoints;
    document.getElementById("compPoint").innerHTML=computerPoints;
}

/*function prints player and computer scores*/
function totalScore(){
    document.getElementById("playerPoint").innerHTML=playerPoints;
    document.getElementById("compPoint").innerHTML=computerPoints;
}