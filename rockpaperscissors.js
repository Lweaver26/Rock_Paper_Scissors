function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"]; // set a variable that contains the R, P, S strings in an array
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]; /* return the value of the "pick" variable after using math.floor (to round down the integer)
                                                            and math.random (to select a random value between 0 and 1).   .length is used to calculate the length of the array */
}

console.log(getComputerChoice())

function getHumanChoice() {
  let humanPick = prompt("Please select Rock, Paper, or Scissors"); // prompt user for a selection
  return humanPick; // return the value of the input from the prompt
}

getHumanChoice()

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanSelection.toLowerCase();
    if (humanSelection === computerSelection) {
        console.log("Tied Game!");
    }
    else if (humanSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win, rock beats scissors!");
    }
    else if (humanSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win, paper beats rock");
    }
    else if (humanSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win, scissors beats paper");
    }
    else if (humanSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose, paper beats rock")
    }
    else if (humanSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose, scissors beats paper");
    }
    else if (humanSelection === "Scissors" && computerSelection === "Rock"){
        console.log("You lose, rock beats scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)