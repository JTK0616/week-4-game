//Set the number of guesses reaming to 10

var guessesRemaining=10;

//Display the number of guesses remaining

document.getElementById('guesses_left').innerHTML = guessesRemaining;


// Define the wordbank to be used in the hangman game

var wordbank=["elementary","playground","crayons","glitter", "backpack", "recess", "teacher", "desk", "encyclopedia", "library", "homeroom", "lunchbox","classmates","crosswalk"];

// Randomly choose a word from the wordbank to be guessed

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];
var dashArray = [];

console.log(randomWord);

//Reduce number of guesses for each letter typed

function reduceGuesses() {
   guessesRemaining--;    
}

//Take random word and create dashed word

for (i = 0; i < randomWord.length; i++) {
	dashArray[i] = "_";
}
document.getElementById('dashed_word').innerHTML = dashArray.join(" ");


//Show found letters in dashed word

document.onkeyup = function(event) {
	var guess = event.key;
	for(var i = 0; i < randomWord.length; i++) {
		if(randomWord[i] === guess) {
			dashArray[i] = guess;
		}
	} //end for loop
	document.getElementById('dashed_word').innerHTML = dashArray.join(" ");
}


// Record previous guesses - Not Working

// var lettersGuessed = [];

// document.onkeyup=function(){
//     document.getElementById('guesses_made').innerHTML = push.guess(lettersGuessed);
//     }



 

  