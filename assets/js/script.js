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
                alert(`You Selected: ${gameType}`);
            }
        });
    }
});

function runGame() {
}

function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
}

function displayAdditionQuestion() {
}

function displaySubtractQuestion() {
}  

function displayMultiplyQuestion() {
}

function displayDivisionQuestion() {
}