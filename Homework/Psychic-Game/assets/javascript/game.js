//alphabet array for computer to choose from
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// initializing wins/losses/Guesses
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = [];
            
//var to access text on screen
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessesText = document.getElementById("guesses-text");

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerPick = computerOptions[Math.floor(Math.random() *   computerOptions.length)];
//cheater
console.log(computerPick);
        
for(var i=9; i!=0; i--) {
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
         //adds selected key to guesses array
        guesses.push(userGuess);
                
        // Checks if guess was correct
        if (userGuess == computerPick){
            wins++;
            remaining = 9;
            guesses = [];
            computerPick = computerOptions[Math.floor(Math.random() *   computerOptions.length)];
            console.log(computerPick);
        } 
        else {
            remaining--;
            if(remaining==0){
            losses++;
            remaining = 9;
            guesses = [];
            computerPick = computerOptions[Math.floor(Math.random() *   computerOptions.length)];
            console.log(computerPick);
            }
                    
        }
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        remainingText.textContent = "Guesses Remaining: " + remaining;
        guessesText.textContent = "You Chose: " + guesses;
    }
            
}
        
   