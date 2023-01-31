let youScore = 0;
let player2Score = 0;
let numOfRounds = prompt('How many rounds do you want to play?', 9);
let numRounds = (numOfRounds != 0) ? numOfRounds : 9;
let currRound = 0;
let youTotal = 0;
let player2Total = 0;
let currGame = 1;
const round_label_div = document.getElementById("round-label");
const result_p = document.querySelector(".result > p");
const score_div = document.querySelector(".score");
const youScore_span = document.getElementById("youScore");
const player2Score_span = document.getElementById("player2Score");
const youTotal_span = document.getElementById("youTotal");
const player2Total_span = document.getElementById("player2Total");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetBtnDisabled = document.querySelector(".resetBtnDisabled");
const gameNumber = document.getElementById("game-label");




//Capitalizes the Choices in Results output.
function toCapitalize(word) {
    if (word === 'rock') return "Rock";
    if (word === 'paper') return "Paper";
    if (word === 'scissors') return "Scissors";
}
//If you win, your score increases by 1, Round score is displayed, result of choice is displayed, and round number/# of rounds is displayed. Round increments by 1.
function win(you, player2) {
    youScore++;
    youScore_span.textContent = youScore;
    player2Score_span.textContent = player2Score;
    result_p.textContent = toCapitalize(you) + " beats " + toCapitalize(player2) + ". You Win!!!"
    currRound++
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}
//If you lose, Player2 score increases by 1, Round score is displayed, result of choice is diplayed, and round number/#of rounds is displayed. Round increments by 1.
function lose(you, player2) {
    player2Score++;
    player2Score_span.textContent = player2Score;
    youScore_span.textContent = youScore;
    result_p.textContent = toCapitalize(you) + " loses to " + toCapitalize(player2) + ". You Lost!!!"
    currRound++;
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}
//If it is a draw, nobody's score increases. Round score remains the same, result of choice is displayed, and round number/#of rounds is displayed. Round increments by 1.
function draw(you, player2) {
    result_p.textContent = toCapitalize(you) + " equals " + toCapitalize(player2) + ". It's a draw!!!"
    currRound++;
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}
//Player 2 makes a random choice.
function getP2Choice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
//Executing the play function when choosing rock, paper, or scissors if event listener is on.
const mainrock = () => {
    play("rock");
}

const mainpaper = () => {
    play("paper");
}

const mainscissors = () => {
    play("scissors");
}
//After you click on a choice, the play function will be executed for that choice.
function main() {
    gameNumber.textContent = `Game: ${currGame}`;

    rock_div.addEventListener('click', mainrock);

    paper_div.addEventListener('click', mainpaper);

    scissors_div.addEventListener('click', mainscissors);

}


function resetGlobalVariables() {

    resetBtnDisabled.classList.toggle('resetBtnDisabled');
    resetBtnDisabled.classList.toggle('resetBtn');
    resetBtnDisabled.setAttribute('disabled', true);

    //list of all the variables with original attributes here
    youScore = 0;
    player2Score = 0;
    youTotal = 0;
    player2Total = 0;
    numOfRounds = prompt('How many rounds will you play?',9);
    numRounds = (numOfRounds != 0) ? numOfRounds : 9;
    currRound = 0;
    currGame = 1;

    youTotal_span.textContent = youTotal;
    player2Total_span.textContent = player2Total;
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;

    
    main();
}
function gamesOver() {
    rock_div.removeEventListener('click', mainrock);

    paper_div.removeEventListener('click', mainpaper);

    scissors_div.removeEventListener('click', mainscissors);
    
    resetBtnDisabled.removeAttribute('disabled');
    resetBtnDisabled.classList.toggle('resetBtnDisabled');
    resetBtnDisabled.classList.toggle('resetBtn');

}

//The play function with an if/then scenario for each choice and a random choice by Player2.
function play(youChoice) {
    const p2Choice = getP2Choice();

    switch (youChoice + p2Choice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(youChoice, p2Choice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(youChoice, p2Choice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(youChoice, p2Choice);
            break;

        }
    //If your current rounds = the number of rounds you wanted to play, then game is over.
    if (currRound == numRounds) {
        
        if (youScore > player2Score) {
            youTotal++;
        }
        else if (youScore < player2Score) {
            player2Total++;
        }
        youTotal_span.textContent = youTotal;
        player2Total_span.textContent = player2Total;

        currGame++;
        gameNumber.textContent = `Game: ${currGame}`;
        display("Game over: Click OK and check out the Game Scoreboard below! Two Games out of Three Wins!");
        


        if (youTotal === 2) {

            display("You won 2 out 3 games! You're the winner!");

            gamesOver();
        }

        if (player2Total === 2) {
            display("Player2 won 2 out of 3 games! You lost!");

            gamesOver();
        }
        currRound = 0;
        youScore = 0;
        player2Score = 0;
        youScore_span.textContent = youScore;
        player2Score_span.textContent = player2Score;
        round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;

    }


}

function display(message) {
    setTimeout(function() {
        alert(message);
    },100)
}

resetBtnDisabled.addEventListener('click', resetGlobalVariables);  

main();

