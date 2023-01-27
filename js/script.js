let youScore = 0;
let player2Score = 0;
let numOfRounds = prompt('How many rounds do you want to play?', 9);
let numRounds = (numOfRounds != 0) ? numOfRounds : 9;
let currRound = 0;
let youTotal = 0;
let player2Total = 0;
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


function toCapitalize(word) {
    if (word === 'rock') return "Rock";
    if (word === 'paper') return "Paper";
    if (word === 'scissors') return "Scissors";
}

function win(you, player2) {
    youScore++;
    youScore_span.textContent = youScore;
    player2Score_span.textContent = player2Score;
    result_p.textContent = toCapitalize(you) + " beats " + toCapitalize(player2) + ". You Win!!!"
    currRound++
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}

function lose(you, player2) {
    player2Score++;
    player2Score_span.textContent = player2Score;
    youScore_span.textContent = youScore;
    result_p.textContent = toCapitalize(you) + " loses to " + toCapitalize(player2) + ". You Lost!!!"
    currRound++;
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}

function draw(you, player2) {
    result_p.textContent = toCapitalize(you) + " equals " + toCapitalize(player2) + ". It's a draw!!!"
    currRound++;
    round_label_div.textContent = `Round: ${currRound} / ${numRounds}`;
}

function getP2Choice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
/*function roundTotal(you, player2) {
    if (youScore > player2Score) {
        youTotal++;
    }
    else if (youScore < player2Score) {
        player2Total++;
    }
    youTotal.textContent = youTotal;
    player2Total.textContent = player2Total;
}*/

const mainrock = () => {
    play("rock");
}

const mainpaper = () => {
    play("paper");
}

const mainscissors = () => {
    play("scissors");
}
function main() {
    rock_div.addEventListener('click', mainrock);

    paper_div.addEventListener('click', mainpaper);

    scissors_div.addEventListener('click', mainscissors);
}
function ResetGlobalVariables(){
    //list of all the variables with original attributes here
    youScore = 0;
    player2Score = 0;
    youTotal = 0;
    player2Total = 0;
    numOfRounds = prompt('How many rounds will you play?',9);
    numRounds = (numOfRounds != 0) ? numOfRounds : 9;
    currRound = 0;
    
    main();
}

function gameOver() {
    rock_div.removeEventListener('click', mainrock);

    paper_div.removeEventListener('click', mainpaper);

    scissors_div.removeEventListener('click', mainscissors);
}
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
    if (currRound == numRounds) {
        alert("That's how many rounds you wanted to play! Game over! Check out the Game Scoreboard below!");
        if (youScore > player2Score) {
            youTotal++;
        }
        else if (youScore < player2Score) {
            player2Total++;
        }
        youTotal_span.textContent = youTotal;
        player2Total_span.textContent = player2Total;

        currRound = 0;
        youScore = 0;
        player2Score = 0;
        youScore_span.textContent = youScore;
        player2Score_span.textContent = player2Score;

        if (youTotal === 2) {
            alert("You won 2 out 3 games! You're the winner!");

            gameOver();
        }

        if (player2Total === 2) {
            alert("Player2 won 2 out of 3 games! You lost!");

            gameOver();
        }
    }
}

main();

