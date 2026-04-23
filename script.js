console.log("Hello World");

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

//console.log(getComputerChoice());

function getHumanChoice()
{
    let value = prompt("Enter Rock, Paper or Scissors:");
    return value.toLowerCase().trim();
}

//console.log(getHumanChoice());

function playRound(humanChoice,computerChoice)
{
    console.log("You entered:",humanChoice);
    console.log("Computer:",computerChoice);

    if(humanChoice === computerChoice)
    {
        return "tie";
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors')
    {
        return "win";
    }
    else if(humanChoice === 'paper' && computerChoice==='rock')
    {
        return "win";
    }
    else if(humanChoice==='scissors' && computerChoice==='paper')
    {
        return "win";
    }
    else 
    {
        return "lose";
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0;i<5;i++)
    {
        console.log(`Round ${i+1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result=playRound(humanSelection,computerSelection);

        if(result === "win")
            humanScore++;
        else if(result === "lose")
            computerScore++;

        console.log("Your Score:",humanScore);
        console.log("Computer Score:",computerScore);
    }

    if(humanScore>computerScore)
        return "YOU WIN";
    else if(humanScore<computerScore)
        return "YOU LOST";
    else
        return "MATCH TIE";
}

console.log(playGame());