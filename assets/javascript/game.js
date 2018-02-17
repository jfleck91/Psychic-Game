//letter choices

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

//var functions

var newGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

var newLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

var newGuessesSoFar = function() {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//reset functions
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

//tracking functions

document.onkeyup = function(event) {
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

//win/loss confirmation

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Right on! You got it!! Keep going.");
            reset();
        }
     }else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("Fail you lose. Try again");

        reset();
    }
};