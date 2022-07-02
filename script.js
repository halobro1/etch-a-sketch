function populateBoard(size) {
    //creating 16 rows and 16 columns
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //creating and repeating div 256(16*16) times 
    for(let i = 0; i<256; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = 'blue'
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input)
}