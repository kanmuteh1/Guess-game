var start = document.querySelector("#START");
start.addEventListener("click", function(e){
    e.preventDefault();
    // restart btn
    start.innerHTML = "RESTART";
    // setting body backgroundColor
    var body = document.querySelector("body");
    body.style.background = "Green";
    // resetting guess value
    var getGuess = document.querySelector("#take-input").value="";
    // generating random number
    var randomNum = Math.floor(Math.random()*100)+1;
    // creating & displaying chances
    var chances = 10;
    var displayChances = document.querySelector("#chances");
    displayChances.innerHTML="CHANCES: " + chances;
    // guess game heading
    var guessText = document.querySelector("#guess-text");
    guessText.innerHTML = "PLEASE GUESS A NUMBER<br> 1 - 100";
    // guess game results text
    var textGuess = document.querySelector("#txt-display");
    textGuess.innerHTML = "GUESS RESULT!!!";
    //guess validator function
    var action = document.querySelector("#action-key");
    action.addEventListener("click", function(e){
        e.preventDefault();
        // take user's guess
           var getGuess = document.querySelector("#take-input").value;
        //previous guess function
           var previousGuess = document.querySelector("#PREVIOUS-GUESSED");
           previousGuess.addEventListener("click", function(e){
            var guessedNum = document.querySelector("#GUESSED-NUM")
            guessedNum.innerHTML = "Your previous guess was: " + getGuess; 
           })
           
           var guess = Number(getGuess);

            if(guess === randomNum){
                textGuess.innerHTML = "";  
                textGuess.innerHTML = "YOU WIN!!!";
            }
        
            else if(guess > randomNum){
                chances--;
                textGuess.innerHTML = "";
                textGuess.innerHTML = "Guess too high";
                displayChances.innerHTML="CHANCES: " + chances;
            }
        
            else if (guess < randomNum){
                chances--;
                textGuess.innerHTML = "";
                textGuess.innerHTML = "Guess too low";
                displayChances.innerHTML="CHANCES: " + chances;
            }
            
            else if (isNaN(guess)){
                chances--;
                textGuess.innerHTML = "";
                textGuess.innerHTML = "Guess is invalid";
                displayChances.innerHTML="CHANCES: " + chances;
            }

            if (chances <= 0){
                textGuess.innerHTML = "";
                textGuess.innerHTML ="You lose <br> the correct number is: " + randomNum;
                body.style.background = "red";
            }
        
        
    })
})