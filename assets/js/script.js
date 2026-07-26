//Waiting for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    //Get the button elements and add event listeners to them  
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // Handle button click event
            if (this.getAttribute("data-type") === "submit") {
                alert("Submit button clicked!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

/**
 * Runs the game based on the selected game type  and afeter the user has submitted an answer
 */
function runGame(gameType) {
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
}

function displayAdditionQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent = operand1;
   document.getElementById("operand2").textContent = operand2;
   document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {
}  

function displayMultiplyQuestion() {
}

function displayDivisionQuestion() {
}