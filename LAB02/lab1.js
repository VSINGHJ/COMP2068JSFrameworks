const prompt = require('prompt'); //Prompt module is required

prompt.start();

//Get user input for the selection
prompt.get(['Your_Selection'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  //This statement will convert the input into uppercase letters
  let Your_Selection = result.Your_Selection.toUpperCase();
  console.log('User Selection: ' + Your_Selection);

  //Generating a random number for the computer choice
  let computerSelection;
  let random = Math.random();
  if (random < 0.34) {
    computerSelection = 'PAPER';
} 
  else if (random <= 0.67)
    {
    computerSelection = 'SCISSORS';
  } 
  else
  {
    computerSelection = 'ROCK';
  }
  console.log('Computer Selection: ' + computerSelection);


  if (Your_Selection === computerSelection) {
    
    //If both the selections are same, then it's a tie
    console.log("It's a tie");
  } 
  else if ((Your_Selection === 'ROCK' && computerSelection === 'SCISSORS') || 
             (Your_Selection === 'SCISSORS' && computerSelection === 'PAPER') || 
             (Your_Selection === 'PAPER' && computerSelection === 'ROCK')) {
    console.log("User Wins");
  } 
  else 
  {
    console.log("Computer Wins");
  }
});

function onErr(err) {
  console.log(err);
  return 1; // If an error occured, 1 will get returned
}
