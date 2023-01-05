
var computerScore = 0;
var playerScore = 0;            
var rounds = 0;

for (let i = 0; i < 5; i++) //Loop sets in 5 rounds, after that 5 rounds, the game restart
{
    gameRound(); //this function calls the player and the computer function to choose some option 
    console.log("Jogada " + i);
    console.log(computerScore + " computer X player " + playerScore);
        
}

winner(); //this function call the counter for declare who is the game winner.

function computerChoice() //this function allows the computer to choice one "weapon" in a randonly way
{   
    let weapons = ['rock', 'scissors', 'paper'];
    let computerPlay = weapons[Math.floor(Math.random() * weapons.length)]
    return computerPlay;
    
}

function myChoice() //this function allows the Player to choice one "weapon" and convert toLowerCase
{ 
    let playerChoice = prompt("Escolha Sua Arma. Rock, Scissors or Paper");
    let result  = playerChoice.toLowerCase();
    return result;
    
}
//var player = myChoice();
//var computer = computerChoice();

function gameRound() //this function get the choices and compare declaring who won the round.
{
    let player = myChoice();
    let computer = computerChoice();
    
    if (computer === 'rock' && player === 'paper' || 
    computer === 'paper' && player === 'scissors' || 
    computer === 'scissors' && player  === 'rock')
    {    
        playerScore++;
        alert('YEEAAHH!!! You Won, ' + player + ' beats ' + computer);
    }
    
    else if (computer === 'rock' && player === 'scissors' || 
    computer === 'paper' && player === 'rock' || 
    computer === 'scissors' && player === 'paper')
    {   
        computerScore++
        alert('OOHHH NOOO!!! You lost, ' + computer + ' beats ' + player);
    }

    else   {
        alert('TIE - Nobody Wins!!!');
    }
}

function winner () //this function count how many wins each player has and declare a winner or a tie for the game.
{
    if (computerScore > playerScore)
    {alert("You lost the game! Try again")}

    else if (computerScore < playerScore)
    {alert("You beat the computer! Great")}

    else {
        alert("Nobody won! Try another round.")
    }
}

