//Add even listers - - Code to be executed when the page has finished loading and Code to be executed when the user clicks a button
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "Submit") {
                alert("You clicked submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        })
    }
})

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

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}