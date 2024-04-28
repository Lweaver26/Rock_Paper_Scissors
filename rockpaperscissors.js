function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"]; // set a variable that contains the R, P, S strings in an array
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]; /* return the value of the "pick" variable after using math.floor (to round down the integer)
                                                            and math.random (to select a random value between 0 and 1).   .length is used to calculate the length of the array */
}

function getHumanChoice() {
  let humanPick = prompt("Please select Rock, Paper, or Scissors"); // prompt user for a selection
  return humanPick; // return the value of the input from the prompt
}

let humanScore = 0 // set humanScore to 0
let computerScore = 0 //set computerScore to 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // convert the humanChoice paramter to lowercase
    computerChoice = computerChoice.toLowerCase(); // convert the computerChoice parameter to lowercase
    console.log("Your Choice:", humanChoice); // display your choice in the console
    console.log("Computers Choice:", computerChoice); // display computer's choice in the console
    if (humanChoice === computerChoice) { // Lines 20-41 evaluate conditionals and display the proper message based off your R, P, S input and the Computers random Choice from getComputerChoice
        console.log("Tied Game!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, rock beats scissors!");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, paper beats rock");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, scissors beats paper");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose, paper beats rock")
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose, scissors beats paper");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose, rock beats scissors");
    }
}

const humanSelection = getHumanChoice(); // Call the getHumanChoice function and store it's value in the humanSelection variable
const computerSelection = getComputerChoice(); // Call the getComputerChoice function and store its value in the computerSelection variable

playRound(humanSelection, computerSelection); // call the playRound function, taking the humanSelection and computerSelection as the function parameters