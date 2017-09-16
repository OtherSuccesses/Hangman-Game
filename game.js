var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = "";
var letterGuess;
var guesses = [];
var lives = 10;
var wins = 0;
var losses = 0;
var wordOptions = ["scrum", "ruck", "lock", "flanker", "winger", "touch", "hooker", "prop", "lineout", "crouch", "bind", "set", "scrum half", "center", "box kick", "penalty", "try", "maul", "pitch", "knock on", "charge", "fly half", "fullback"];
var wordDisplay = [];
var emptySpace = "";
var rightGuess = false;

//Function to Choose the Word!
function chooseWord(){
	word = wordOptions[Math.floor(Math.random()* wordOptions.length)];
	console.log(word);
}

//Function to display the blanks!
var displayWord = function(){
	for (var i = 0; i < word.length; i++){
		wordDisplay.push("_&nbsp");
		emptySpace = wordDisplay.join("");
		console.log(wordDisplay);
	}
	console.log(wordDisplay);
	document.getElementById("Word").innerHTML = emptySpace;
}

//When a key is pressed...
document.onkeyup = function(event) {
	letterGuess = event.key.toLowerCase();
	console.log(letterGuess);
	if (guesses.includes(" " + letterGuess)){
		console.log("Repeat Guess");
	}

	else if (word.includes(letterGuess)){

		for (var i = 0; i < word.length; i++){

			if (letterGuess === word[i]){
				wordDisplay.splice(word.indexOf(letterGuess, i), 1, letterGuess);
				emptySpace = wordDisplay.join("");
				rightGuess = true;			
			}
		}

	}

	else if (rightGuess==false && letters.includes(letterGuess)){
			lives--;
			guesses.push(" " + letterGuess);		
		}

	else{
		console.log("Invalid Guess");
	}

	if (emptySpace.includes("_")===false){
		document.getElementById("Result").innerHTML = "<p>You are the Victor</p>";
		wins++;
	}

	else if (lives<=0){
		document.getElementById("Result").innerHTML = "<p>You have lost and brought shame to your nation...</p>";
		losses--;
	}

	rightGuess=false;

	document.getElementById("Word").innerHTML = emptySpace;
	document.getElementById("Wrong-guesses").innerHTML = "Letters Guessed: " + guesses;
	document.getElementById("Lives").innerHTML = "Wrong Guesses: " + lives;
	document.getElementById("Wins").innerHTML = wins;
	document.getElementById("Losses").innerHTML = losses;
}

