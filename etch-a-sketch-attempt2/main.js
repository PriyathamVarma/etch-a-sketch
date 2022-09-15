let clickToColor = false;
let board = document.querySelector(".board")
let boxes = 16;

// setting the initial board and 
function populateBoard(BoxesInGrid) {
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${BoxesInGrid}, 1fr)`
    board.style.gridTemplateRows =  `repeat(${BoxesInGrid}, 1fr)`

        for (let i = 0; i < BoxesInGrid * BoxesInGrid; i++) {
            let square = document.createElement("div");
            square.style.backgroundColor = 'black';
            square.addEventListener("mouseover", colorSquare);
            board.insertAdjacentElement("beforeend", square);
        }
    boxes = BoxesInGrid;
}

function changeBoard(input) {
    populateBoard(input);
}

document.querySelector("body").addEventListener("mousedown", startColoring);
document.querySelector("body").addEventListener("mouseup", stopColoring);

function startColoring() {
    clickToColor = true;
    console.log('click to color is on', clickToColor);
    }

function stopColoring() {
    clickToColor = false;
    console.log('click to color is off', clickToColor);
    }

function colorSquare() {    
    if (clickToColor == true) {
       this.style.backgroundColor = 'white';
    }
}


//set grid length button
let gridButton = document.querySelector(".setGridSizeButton");
gridButton.addEventListener("click", setGridSize);

function setGridSize() {
    let requestedGridSize = prompt("How many blocks should the grid's side be made of?")
    if (requestedGridSize > 0 && requestedGridSize < 100) {
        changeBoard(requestedGridSize);

    } else {
        alert("Please enter an integer between 0 and 100")
    }
}


// set reset button 
let resetButton = document.querySelector(".resetButton")
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
   changeBoard(boxes);
}



populateBoard(boxes);