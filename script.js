let again = document.querySelector(".again")
let number = document.querySelector(".number")
let check = document.querySelector(".check")
let guess = document.querySelector(".guess")
let message = document.querySelector(".message")
let score = document.querySelector(".score")
let highScore = document.querySelector(".highscore")
let body = document.querySelector("body")
let waitMessage = document.querySelector(".waitMessage")
var scoreValue = 20;
var highScoreValue = 0;
let wt  = 0;
var secretNumber = Math.floor((Math.random()*20)+1)
console.log(secretNumber);
check.addEventListener("click", (e) => {
    let guessedNumber = Number.parseInt(guess.value);
    if(guessedNumber === secretNumber) {
        if(scoreValue > highScoreValue) {
            highScoreValue = scoreValue;
            highScore.textContent = highScoreValue;
        }                
        body.style.backgroundColor = "green";
        score.textContent = scoreValue;
        number.textContent = secretNumber;
        message.textContent = "Hurray...!"

        waitMessage.hidden = false;
        setInterval(()=> {
            waitMessage.hidden = true;
            x();
        },3000);
    }
    else if(guessedNumber > secretNumber) {
        message.textContent = "Too high...!";
        body.style.backgroundColor = "orange";
        --scoreValue;
        score.textContent = scoreValue;
    }
    else {
        message.textContent = "Too low...!";
        body.style.backgroundColor = "red";
        --scoreValue;
        score.textContent = scoreValue;
    }
    if(scoreValue <= 0) {
        message.textContent = "You lost!";
        check.disabled = true;
        check.style.backgroundColor = "#999999"
    }
})

again.addEventListener("click", (e) => {
    x();   
})
function x() {
    number.textContent = "?";
    guess.value = "0";
    message.textContent = "Start guessing...";
    score.textContent = "20";  
    body.style.backgroundColor = "black";
    scoreValue = 20;
    secretNumber = Math.floor((Math.random()*20)+1)
    console.log(secretNumber);
    check.disabled = false;
    check.style.backgroundColor = "#eee"
}