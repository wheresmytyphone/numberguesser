var guessed = document.querySelector(".guess");
var guessDisplay = document.querySelector(".guessdisplay");
var submit = document.querySelector(".submit");
var clear = document.querySelector(".clear");
var reset = document.querySelector(".reset");
var correctNumber;
var bottomHint = document.querySelector(".hint");


function randomNumber() {
  var randNum =  Math.floor(Math.random() * 100 + 1)
  correctNumber = randNum;
}

randomNumber();


submit.addEventListener("click", function() {
  guessDisplay.innerText = guessed.value;
  compare();
})

clear.addEventListener("click", function() {
  guessed.value = "";
})

reset.addEventListener("click", function() {
  guessed.value = "";
  guessDisplay.innerText = "";
  bottomHint.innerText = "Take a Guess!";
})

function compare() {
  var userGuess = parseInt(guessed.value)
    if (userGuess > correctNumber) {
      bottomHint.innerText = "Was too high!";
    } if (userGuess < correctNumber){
      bottomHint.innerText = "Was too low!";
  } else if (userGuess === correctNumber) {
      bottomHint.innerText = "BOOM!";
}
}
