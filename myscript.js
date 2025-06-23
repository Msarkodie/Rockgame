//Scores
let humanScore = 0;
let computerScore = 0;

//Referencing the elements
const rocc = document.querySelector("#roc");
const pap = document.querySelector("#pap");
const sciss = document.querySelector("#sci");
const inform = document.querySelector("#info");
const scoreh = document.querySelector("#hscore");
const scorec = document.querySelector("#cscore");


//button event handlers
rocc.addEventListener("click",()=>playGame("rock"));
pap.addEventListener("click",()=>playGame("paper"));
sciss.addEventListener("click",()=>playGame("scissors"));


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
function reset()
{
     humanScore = 0;
     computerScore = 0;
     scoreh.textContent=humanScore;
     scorec.textContent=computerScore;

     
}


function playGame(humanChoice)
{
    let computerChoice = getComputerChoice(3);

    if(computerChoice && humanChoice)
    {
        if (humanChoice === 'paper' && computerChoice === 'rock')
            {
               inform.textContent='You win ' + humanChoice + ' beats ' + computerChoice;
               humanScore++;
               scoreh.textContent= humanScore;
    
            }

        else if (humanChoice === 'rock' && computerChoice === 'paper')
            {
                inform.textContent='You lose ' + computerChoice + ' beats ' + humanChoice;
                computerScore++;
                scorec.textContent=computerScore;
        
            }

        if (humanChoice === 'scissors' && computerChoice === 'paper')
                {
                inform.textContent='You win ' +humanChoice + ' beats ' + computerChoice;
                humanScore++;
                scoreh.textContent=humanScore;
        
                }
    
        else if (humanChoice === 'paper' && computerChoice === 'scissors')
                {
                    inform.textContent='You lose ' + computerChoice + ' beats ' + humanChoice;
                    computerScore++;
                    scorec.textContent=computerScore;
            
                }    

    
        if (humanChoice === 'rock' && computerChoice === 'scissors')
                {
                    inform.textContent='You win ' +humanChoice + ' beats ' + computerChoice;
                    humanScore++;
                    scoreh.textContent=humanScore;
            
                }
        
        else if (humanChoice === 'scissors' && computerChoice === 'rock')
                {
                        inform.textContent='You lose ' + computerChoice + ' beats ' + humanChoice;
                        computerScore++;
                        scorec.textContent=computerScore;
                
                }

        if(humanChoice === computerChoice)
        {
            inform.textContent='Awwnn. There was a tie. No score then'
        }
      }
    
      if(humanScore == 5 || computerScore == 5)
      {
          if(humanScore == 5)
          {
            inform.textContent="CONGRATULATIONS,YOU WON. YOU WHOOPED "+humanScore+" AGAINST COMPUTER SCORE OF "+computerScore;       
          }

          else
          {
            inform.textContent="AWW THAT'S AWFUL, YOU LOST. YOU SCORED "+humanScore+" AGAINST COMPUTER SCORE OF "+computerScore;
          }
          reset();
      }
}





