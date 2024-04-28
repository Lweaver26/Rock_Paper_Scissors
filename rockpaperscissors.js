function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"]; // set a variable that contains the R, P, S strings in an array
    return pick[Math.floor(Math.random() * pick.length)]; /* return the value of the "pick" variable after using math.floor (to round down the integer)
                                                            and math.random (to select a random value between 0 and 1).   .length is used to calculate the length of the array */
}
console.log(getComputerChoice());