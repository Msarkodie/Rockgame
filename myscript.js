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
//Get the human input
let input = prompt("Please enter your choice. 1.paper 2.scissors 3.rock");

//Streamline the human selection and store
const humanSelection = getHumanChoice(input);

//Generate computer selection and store
const computerSelection = getComputerChoice(3);

//Scores
let humanScore = 0;
let computerScore = 0;

//function to take human choice and generate reponse
function getHumanChoice(word)
{
    lowerWord = word.toLowerCase();
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
               console.log('You win ' +humanChoice + ' beats ' + computerChoice);
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
    

        console.log('End of round. HumanScore = ' + humanScore + ' ComputerScore = ' + computerScore)
    }
    
}

console.log(getComputerChoice(3));
console.log(getHumanChoice(humanSelection));
playRound(humanSelection,computerSelection);

