//1. Create a webpage with a 16x16 grid of square divs.
//2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
//3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

//1. creating 16x16 grid
function populateBoard(size) {
    let board = document.querySelector(".board");   
    let squares = board.querySelectorAll('div') 
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    //creating and repeating div 256(16*16) times 
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div'); //creating element 'div' and assigning letting square = div
        square.addEventListener('mouseover', () => { 
            square.style.backgroundColor = "black";
         }) //2. setting up "hover" effect, causing grid divs to change colour to black when mouseover
        square.style.backgroundColor = 'blue';
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