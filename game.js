let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".img");
let msg = document.querySelector("#msg1");
let user= document.querySelector("#user");
let comp= document.querySelector("#comp");

const compOption = () => {
    let options = ["stone", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawMatch = () => {
    console.log("Game is draw");
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "orange";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText= "You win!";
        msg.style.backgroundColor="Green";
        userScore++;
        user.innerText =userScore;
    }
    else {
        console.log("You lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText= compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice is:", userChoice);
    let compChoice = compOption();
    let userWin = true;
    console.log("computer choice is:", compChoice);
    if (userChoice === compChoice) {
        drawMatch();
    }
    else {
        if (userChoice === "stone")
            userWin = compChoice === "paper" ? false : true;
        else if (userChoice === "paper")
            userWin = compChoice === "scissor" ? false : true;
        else
            userWin = compChoice === "paper" ? true : false;

        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});