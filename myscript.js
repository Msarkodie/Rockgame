//Scores
let humanScore = 0;
let computerScore = 0;

//Referencing the buttons
const rocc = document.querySelector("#roc");
const pap = document.querySelector("#pap");
const sciss = document.querySelector("#sci");


//button event handlers
rocc.addEventListener("click",);
pap.addEventListener("click",);
sciss.addEventListener("click",);


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



//
function playGame(humanChoice)
{
    let computerChoice = getComputerChoice(3);

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


playGame();



