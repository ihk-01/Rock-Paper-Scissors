let youScore = 0;
let player2Score = 0;
let numOfRounds = prompt('How many rounds should we play?',11);
let numRounds = (numOfRounds != 0) ? numOfRounds : 11;
let currRound = 0;
const round_label_div = document.getElementById("round-label");
const result_p = document.querySelector(".result > p");
const score_div = document.querySelector(".score");
const youScore_span = document.getElementById("youScore");
const player2Score_span = document.getElementById("player2Score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function toCapitalize(word) {
    if(word === 'rock') return "Rock";
    if(word === 'paper') return "Paper";
    if(word === 'scissors') return "Scissors";
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
        alert("That's how many rounds you wanted to play! Game over!");
    }
    
}

function main() {
    rock_div.addEventListener('click', function() {
        play("rock");
})

    paper_div.addEventListener('click', function() {
        play("paper");
})

    scissors_div.addEventListener('click', function() {
        play("scissors");
})
}

main();

