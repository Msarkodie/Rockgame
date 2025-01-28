//function to generate computer choice
function getComputerChoice(num)
{
    let choice = Math.floor(Math.random()*num)

    if (choice === 0)
        return "paper";
    else if (choice === 1)
        return "scissors"
    else
        return "rock"
}



//Streamline the human selection and store
//const humanSelection = getHumanChoice();

//Generate computer selection and store
//const computerSelection = getComputerChoice(3);

//Scores
let humanScore = 0;
let computerScore = 0;

//function to take human choice and generate reponse
function getHumanChoice()
{
    let input = prompt("Please enter your choice. 1.paper 2.scissors 3.rock");
    lowerWord = input.toLowerCase();
    if (lowerWord === 'paper')
        return "paper";
    else if (lowerWord === 'scissors')
        return "scissors";
    else if(lowerWord === 'rock')
        return "rock";
    else 
        return "Sorry, wrong entry"
}
//
function playRound(humanChoice, computerChoice)
{
    if(computerChoice && humanChoice)
    {
        if (humanChoice === 'paper' && computerChoice === 'rock')
            {
               console.log('You win ' + humanChoice + ' beats ' + computerChoice);
               humanScore++;
    
            }

        else if (humanChoice === 'rock' && computerChoice === 'paper')
            {
                console.log('You lose ' + computerChoice + ' beats ' + humanChoice);
                computerScore++;
        
            }

        if (humanChoice === 'scissors' && computerChoice === 'paper')
                {
                console.log('You win ' +humanChoice + ' beats ' + computerChoice);
                humanScore++;
        
                }
    
        else if (humanChoice === 'paper' && computerChoice === 'scissors')
                {
                    console.log('You lose ' + computerChoice + ' beats ' + humanChoice);
                    computerScore++;
            
                }    

    
        if (humanChoice === 'rock' && computerChoice === 'scissors')
                {
                    console.log('You win ' +humanChoice + ' beats ' + computerChoice);
                    humanScore++;
            
                }
        
        else if (humanChoice === 'scissors' && computerChoice === 'rock')
                {
                        console.log('You lose ' + computerChoice + ' beats ' + humanChoice);
                        computerScore++;
                
                }

        if(humanChoice === computerChoice)
        {
            console.log('Awwnn. There was a tie. No score then')
        }
    

        console.log('End of this round. HumanScore = ' + humanScore + ' ComputerScore = ' + computerScore)
        
    }
    
}

function playGame()
{
    console.log('Round 1')
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(3);
    console.log('Computer Selection is ' + computerSelection);
    console.log('Human Selection is ' + humanSelection);
    playRound(humanSelection,computerSelection);

    console.log('Round 2')
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    console.log('Computer Selection is ' + computerSelection);
    console.log('Human Selection is ' + humanSelection);
    playRound(humanSelection,computerSelection);

    console.log('Round 3')
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    console.log('Computer Selection is ' + computerSelection);
    console.log('Human Selection is ' + humanSelection);
    playRound(humanSelection,computerSelection);

    console.log('Round 4')
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    console.log('Computer Selection is ' + computerSelection);
    console.log('Human Selection is ' + humanSelection);
    playRound(humanSelection,computerSelection);

    console.log('Round 5')
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    console.log('Computer Selection is ' + computerSelection);
    console.log('Human Selection is ' + humanSelection);
    playRound(humanSelection,computerSelection);

    

    




    console.log('At the end of the 5 Rounds Human Score is '+ humanScore + ' Computer Score is '+ computerScore)
    if(humanScore > computerScore)
        {
            console.log('Wow, Congratulations, you won.')

        }

    else if(humanScore < computerScore)
        {
            console.log('Ohhh sorry but you lost the game')
        }

    else
        {
            console.log('Its a tie. Play again next time')
        }


}

playGame();



