let color = "black";

//1. creating 16x16 grid
function populateBoard(size) {
    let board = document.querySelector(".board");   
    let squares = board.querySelectorAll("div") 
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;

    //creating and repeating div 256(16*16) times 
    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div"); //creating element 'div' and assigning letting square = div
        square.addEventListener("mouseover", colorSquare); //2. setting up "hover" effect, causing grid divs to change colour to black when mouseover
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16); //populates the board, size = 16

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        console.log("too many squares");
    }
}

function colorSquare() {
    if(color = 'random')
    this.style.backgroundColor = color;
}

function changeColour(choice) {
    color = choice;
}

