//Waiting for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    //Get the button elements and add event listeners to them  
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // Handle button click event
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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
    }else if (gameType === "subtraction") {
        displaySubtractQuestion(num1, num2);
    }else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(` Awwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Calculates the correct answer based on the operands and operator
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    switch (operator) {
        case "+":
            return [operand1 + operand2, "addition"];
        case "-":
            return [operand1 - operand2, "subtraction"];
        case "x":
            return [operand1 * operand2, "multiply"];
        case "÷":
            return [operand1 / operand2, "division"];
        default:
            alert(`Unknown operator: ${operator}`);
            throw `Unknown operator: ${operator}. Aborting!`;
    }
}

/**
 * Get the current score from the DOM and increment it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Get the current tally of incorrect answers from the DOM and increment it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent = operand1;
   document.getElementById("operand2").textContent = operand2;
   document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(oeprand1, operand2) {

    document.getElementById("operand1").textContent = oeprand1 > operand2 ? oeprand1 : operand2;
    document.getElementById("operand2").textContent = oeprand1 > operand2 ? operand2 : oeprand1;
    document.getElementById("operator").textContent = "-";
}  

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion() {
}