window.addEventListener("load", startup);
//this is needed to load the main functions
//the "startup" function I named is being defined below

function startup() {	
	
	document.getElementById("play1").addEventListener("click", startGame1);
	//when I click the play button with ID "play1", the startGame1 function will begin	
	
	randomNum = document.getElementById("numGenerator").innerHTML = Math.floor((Math.random() * 9) + 1);
	//i had the random number that is generated to be a part of the actual webpage. i'm not sure if there is a way to keep the number only in JS so for now the visibility is set to hidden
	//code from w3schools
	//Math.floor((Math.random() * maxNumber) + minNumber);
	//I want the random number to be generated at the START of the webpage so that it does not change
	
}

var randomNum;
//the variable for the random number generated which can be used globally

var i = 7;
//this variable is the number of guesses the user has left

function startGame1() {
//this function will make the game appear	
	
	document.getElementById("guessIcons").innerHTML = 
	//I had a <section> tag that was blank but will become occupied by the following text
	//there may be a better way to incorporate this block of text and the <input>s that it holds
	"<br/> Okay! I'm thinking of a number between 1 and 100. <br/> You have " + i + " guesses! <br/> What is it?" + '<br/>' + "<input id='guessValue' type='number' min='1' max='100'/>" + "<input id='guessSubmit' class='button' type='submit' value='Guess!'>";
	//I created text that displays the guess counter as well as two more inputs for actually inputting your answer	
		
	document.getElementById("guessSubmit").addEventListener("click", answer1);
	//this is connected to the guess button to submit the answer of the user
	
}	

function answer1() {
//this is the function that occurs when you hit the "Guess!" button 
	var userGuess;
	userGuess = document.getElementById("guessValue").value;
	//this is calling the value that the user inputs into the guess box

		//the following will display a message notifying the user if their answer is too high or too low
		if (userGuess < randomNum) {
			
			document.getElementById("displayHint").innerHTML = userGuess + " is too low!";
		}
		
		else if (userGuess > randomNum) {
			
			document.getElementById("displayHint").innerHTML = userGuess + " is too high!";
		}
				
		if (userGuess != randomNum) {
		//if the user's guess is not the number that is randomly generated then the guess counter will go down one	
			i--;
			document.getElementById("play1").click();
			//the counter for some reason only goes down when the "Play!" button is clicked and so I make it click the button to reduce the counter
		}
		
		if (userGuess == randomNum) {
		//if you guess the number	
			document.write("You Win! You're the best!");
		}
		
		if (i == 0) {
		//if you run out of guesses
			document.write("Sorry! My number was " + randomNum + "! Better luck next time!");
		}
}
