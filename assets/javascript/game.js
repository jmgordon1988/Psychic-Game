var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var wrongGuesses = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



document.onkeyup = function (event) {

    var userGuess = event.key;

    if (computerChoices.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesRemaining = 9;
            wrongGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            reset();
        }
        
        if (wrongGuesses.includes(userGuess)){

        }
        else if (userGuess != computerGuess) {
            wrongGuesses.push(userGuess);
            guessesRemaining--;
            
        }

        if (guessesRemaining === 0) {
            losses++;
            guessesRemaining = 9;
            wrongGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            reset();
        }

        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess What Letter I'm Thinking Of" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesRemaining + "</p>" +
            "<p>Your Guesses So Far: " + wrongGuesses.join(", ") + "</p>";
        document.querySelector("#psychicGame").innerHTML = html;
    }
}
