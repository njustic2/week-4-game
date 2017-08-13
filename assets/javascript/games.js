// <script type="text/javascript">
// Psuedocode
// 1. The user should guess a letter
// 2. Capture the choice of the user and generate a computer choice
// 3. Compare the choices 
// 4. If user choice is equals to computer generated choice then display win. Also increase the win counter
// 5. If none of the user choice match the computer generated choice, then let the user enter upto 9 choices.
// 6. If none of the 9 choice match the computer choice then display loss and increase the loss counter
// 7. Also, display the number of losses left in the 9 tries
//    and display the letters that the user entered
	

//declare variables and arrays
	var wins = 0;
	var losses = 0;
	var guess = ' ';
	var count = 10;
	var options = ["t","r","i","a","n"];// and array of options that the computer cna choose from
	function doudge() {
   		guess = '';
   		count = 9;
	}

	//1. This function reads what the user presses on the keyboard and displays an alert.This command, onkeyup, 
	//   is used to read from the keyboard whether the user is pressing anything or not
	document.onkeyup = function(){
	alert("Guess what letter I am thinking of by pressing a key from the keyboard");

		//2.2 Generate a computer choice
		var computerGuess = options[Math.floor(Math.random()*options.length)];//the math.floor... formula choses randomly from 
		// the array variable named options declared in the global area with contents train and rounds the number down to the nearest degit 
		console.log(computerGuess);


		    if (guess.length < 11) { //5.2 user should enter 9 more choices
		    	count--;

				//2.1 Next capture what the user is actually pressing
				// The command starting at event.keycode, attaches the value of the key code to the key that was pressed, 
				// take that character and turn it into a string, the toLowerCase command is used to convert whatever key that is pressed
				// to lower case letter. is handling user error just to make sure only the lower case is given to the computer.
				var userguess = String.fromCharCode(event.keyCode).toLowerCase();
				
				guess+= userguess;//This makes sure that no letter is over written And display the letters that the users type.
				
					//3. Compare choices
				  if (userguess == "t" || userguess =="r" || userguess =="a" || userguess=="i" || userguess =="n") {
					//4.1 if user choice is equal to computer choice
					if((userguess=='t') && (computerGuess=='t')){
						wins++;
						doudge();
					}

					
					if ((userguess=='r') && (computerGuess=='r')) {
						wins++;
						doudge();
					}
					
					if ((userguess=='i') && (computerGuess=='i')){
						wins++;
						doudge();
					}

					if ((userguess=='a') && (computerGuess=='a')){
						wins++;
						doudge();
					}
						   
					if ((userguess=='n') && (computerGuess=='n')){
						wins++;
						doudge();
					} //5.1  None of the user choice match computer generated choice
					
					else if (count == 0) {// Also, display the number of losses left in the 9 tries
						losses++;
						doudge();
											
					}	
					else { //6.1 None of the 9 choices match the computer choice
							alert("press t or r or a or i or n to increase your chances of guessing correctly");
						
					} //6.3 Increase the loss counter
				  }
		    }	
			
		// Display the wins, loss and the title of the game.
		var html = "<h1> The Psychic Game </h1>" + "<p> Guess what letter I am thinking of... </p>" + "<p> Wins: " 
		+ wins + "</p>" + "<p> losses: " + losses + "</p>" + "<p> Guesses left: " + count + "</p>" + "<p> Your Guesses so far: " + guess + "</p>";

		document.querySelector('#game').innerHTML = html;
	}

// </script>