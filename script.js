var action = document.querySelector("#action-key");

action.addEventListener("click", function(e){
    e.preventDefault();
        var getGuess = document.querySelector("#take-input").value;
        var randomNum = Math.floor(Math.random()*20)+1;
        var textGuess = document.querySelector("#txt-display");
        var chances = 4;
    
        while (chances > 0){
        getGuess.innerHTML= "";
        var guess = getGuess;
        
        if (chances == 0){
            textGuess.innerHTML = "";
            textGuess.innerHTML = "You lose"
        }

        if(guess === randomNum){
            textGuess.innerHTML = "";  
            textGuess.innerHTML = "You win";
            break;
        }
    
        else if(guess > randomNum){
            chances--;
            textGuess.innerHTML = "";
            textGuess.innerHTML = "Guess too high; you have " + chances + " guesses " + "left";
        }
    
        else if (guess < randomNum){
            chances--;
            textGuess.innerHTML = "";
            textGuess.innerHTML = "Guess too low; you have " + chances + " guesses " + "left"; 
        }
        
        else if (isNaN(guess)){
            chances--;
            textGuess.innerHTML = "";
            textGuess.innerHTML = "Guess is invalid; " + chances + " guesses " + "left";   
        }
        }
    
})
