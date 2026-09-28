function getComputerChoice(){
  let choice = ['rock','paper','scissors'];
  return choice[Math.floor(Math.random() * 3)];
}

// Test computer choice 
// console.log(getComputerChoice());
// console.log(getComputerChoice());


function getHumanChoice(){
  let userInput = prompt('Enter you choice !!');
  return userInput;
}

// Test the user function
// console.log(getHumanChoice());

