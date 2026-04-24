let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let ans = Math.random();
    if(ans < 0.33)
      return "rock";
    else if(ans < 0.66)
      return "paper";
    else 
      return "scissors"; 
}

function playRound(humanChoice)
{
    const computerChoice = getComputerChoice();

    console.log("You entered:",humanChoice);
    console.log("Computer:",computerChoice);

    if(humanChoice === computerChoice)
    {
        return "tie";
    }
    else if( (humanChoice === 'rock' && computerChoice === 'scissors') ||
           (humanChoice === 'paper' && computerChoice==='rock') ||
           (humanChoice==='scissors' && computerChoice==='paper') )
    {      

        return "win";
    }
    else 
    {
        return "lose";
    }    
}

let gameOver=false;

const buttons = document.querySelectorAll("button");
const finalResult =document.querySelector(".result");
const score = document.querySelector(".score");
const scoreBoard=document.querySelector(".scoreBoard");

buttons.forEach(button => {
    button.addEventListener("click",function() {
        if (gameOver) return;
        let result =playRound(button.id);

        if(result === "win")
        {
            humanScore++;
            scoreBoard.textContent="You get 1 point";
        }
       else if(result === "lose")
        {    
            computerScore++;
            scoreBoard.textContent= "Computer gets 1 point";
        }
        else
        {
            scoreBoard.textContent=  "Match Tie";
        }

       score.textContent="Your Score: "+humanScore+" Computer Score: "+computerScore;

       if(humanScore === 5)
        {
            finalResult.textContent= "YOU WIN";
            gameOver = true;
        }
        else if(computerScore === 5)
        {
            finalResult.textContent=  "YOU LOST";
            gameOver = true;
        }

    });  
});

const reset=document.querySelector('.reset');
reset.addEventListener("click",function(){
    gameOver = false;
    humanScore=0;
    computerScore=0;
    score.textContent="Your Score: "+humanScore +" Computer Score:"+computerScore;
    scoreBoard.textContent="GAME RESTARTED";
    finalResult.textContent="";
});