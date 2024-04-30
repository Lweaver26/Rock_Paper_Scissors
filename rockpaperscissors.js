function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"]; // set a variable that contains the R, P, S strings in an array
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]; /* return the value of the "pick" variable after using math.floor (to round down the integer)
                                                            and math.random (to select a random value between 0 and 1).   .length is used to calculate the length of the array */
}

function getHumanChoice() {
  let humanPick = prompt("Please select Rock, Paper, or Scissors"); // prompt user for a selection
  return humanPick; // return the value of the input from the prompt
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // convert the humanChoice paramter to lowercase
    computerChoice = computerChoice.toLowerCase(); // convert the computerChoice parameter to lowercase
    console.log("Your Choice:", humanChoice); // display your choice in the console
    console.log("Computers Choice:", computerChoice); // display computer's choice in the console
    if (humanChoice === computerChoice) { // Lines 20-35 evaluate conditionals and display the proper message based off your R, P, S input and the Computers random Choice from getComputerChoice
        console.log("Tied Game!");
        return "Tied Game!";
    } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")  
    ){
        console.log("You win!")
        return "You win!"; // return the "You win!" value
    } else if (   
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")  
    ){
        console.log("You lose!");
        return "You lose!"; // return the "You lose!" value
    }
}

playGame() // call the playGame function
function playGame() {
    let humanScore = 0 // set humanScore to 0
    let computerScore = 0 //set computerScore to 0
    for (let i = 0; i < 5; i++) { // loop the round 5 times
        const humanSelection = getHumanChoice(); // Call the getHumanChoice function and store it's value in the humanSelection variable
        const computerSelection = getComputerChoice(); // Call the getComputerChoice function and store its value in the computerSelection variable
        const roundResult = playRound(humanSelection, computerSelection); // call the playRound function, taking the humanSelection and computerSelection as the function parameters
    if (roundResult === "You win!") { // use conditionals to increase the "Score" variables by 1 if the returned value in the playRound function is "You win!"
        humanScore++
    } else if (roundResult === "You lose!") { // use conditionals to increase the "Score" variables for the computer by 1 if the returned value in the playRound function is "You lose!"
        computerScore++
    }
    }
    if (humanScore > computerScore) { // if humanScore is greater than the computer score, display the below console message
        console.log("Winner! Your Score:", humanScore + " " + "Computer Score:", computerScore)
    } else if (humanScore < computerScore) { // else, if the humanScore is less than the computerScore, display the below console message
        console.log("Loser. Your Score:", humanScore + " " + "Computer Score:", computerScore)
    } else if (humanScore === computerScore) {
        console.log("Tied Game!")
    }
}