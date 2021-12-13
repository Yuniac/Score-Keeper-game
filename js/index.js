// catch

// scores
let p1Score = 0;
let p2Score = 0;
const playerOneScore = document.getElementById("playerOneScore");
const playerTwoScore = document.getElementById("playerTwoScore");


// win limit
const selectMenu = document.getElementById("selectMenu");
const getScoreLimit = function() {
    return selectMenu.options[selectMenu.selectedIndex].value;
}

// buttons
const playerOneButton = document.getElementById("playerOne");
const playerTwoButton = document.getElementById("playerTwo");
const resetButton = document.getElementById("reset");


// events

// if a player changes the score limit mid-game
selectMenu.addEventListener("change", function() {
    location.reload();
})

// add event listeners to buttons
playerOneButton.addEventListener("click", getPointForP1);
playerTwoButton.addEventListener("click", getPointForP2);


// get a point by a click

// player 1
function getPointForP1() {
    p1Score += 1;
    playerOneScore.textContent = p1Score;
    // using double equal signs instead of 3 because the function is returning a string and we are comparing it to a number

    // stop the game and animate the winner/loser
    if (p1Score == getScoreLimit()) {
        stopTheGame();
        playerOneScore.classList.add("winner-text");
        playerTwoScore.classList.add("loser-text")
    }
}


// player 2
function getPointForP2() {
    p2Score += 1;
    playerTwoScore.textContent = p2Score;
    if (p2Score == getScoreLimit()) {
        /* using double equal signs instead of 3 because the function is returning a string and we are comparing it to a number. You could also paresInt it instead. The comparison still works here between a string and a number because this is js we talking about :) */

        // stop the game and animate the winner/loser
        if (p2Score == getScoreLimit()) {
            stopTheGame();
            playerTwoScore.classList.add("winner-text");
            playerOneScore.classList.add("loser-text")
        }
    }
}


// end the game when a player reaches 5 points

function stopTheGame() {
    // remove listeners to prevent counting more than 5

    // player 1
    playerOneButton.removeEventListener("click", getPointForP1);
    playerOneButton.style.opacity = "0.5";
    playerOneButton.style.cursor = "default";

    // playuer 2
    playerTwoButton.removeEventListener("click", getPointForP2);
    document.body.classList.add("winner-background");
    playerTwoButton.style.opacity = "0.5";
    playerTwoButton.style.cursor = "default";
}


// restart the game by enabling the event listeners once again

resetButton.addEventListener("click", function() {
    // reset everything

    document.body.classList.remove("winner-background");
    // player 1
    playerOneScore.textContent = 0;
    playerOneScore.classList.remove("winner-text", "loser-text");
    playerOneButton.style.opacity = "";
    playerOneButton.style.cursor = "pointer";

    playerTwoScore.textContent = 0;
    playerTwoScore.classList.remove("winner-text", "loser-text");
    playerTwoButton.style.opacity = "";
    playerTwoButton.style.cursor = "pointer";
    restartTheGame();
})



function restartTheGame() {
    playerOneButton.addEventListener("click", getPointForP1);
    playerTwoButton.addEventListener("click", getPointForP2);
    p1Score = 0;
    p2Score = 0;
}