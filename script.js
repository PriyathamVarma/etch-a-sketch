/* 

css: 
- container 
    - give container a fixed height and width; 
    - give a border to the container 
- use flexbox and give height and width in fr to each square


constants: 
- etch-square: each individual square is a div with id etch-square


step 1: create a container that is fixed in size

// create a new element that's a div 
// add the id for container
// in css, set width and height for container to 1000px

step 2: create a 16 by 16 grid of square divs
    - create a parent div with the Id "container"
    - variables: 
        - sideLength = initially at 16
            - side length is also the less than in the for loop for row and column
    - create a row of 16 squares, 16 times:
        - use two loops: 
            - loop 1: 16 rows
            - loop 2: 16 columns
                - put constant: etch-square here
step 3: test event listeners 
    - add event listener for divs w class etch-square when mouse 'hover' over it
        - make background color black upon hover
            - can do this by adding a new class: "alternative-color-on-hover", which makes the bg color in css "black"
            - can add class upon hover
step 4: ask user for a new grid
    - have a button which takes an event listener for click
        - return prompt which asks for user input for how many squares per side of new grid;
            - only accept values between 0 and 100 
            - the figure should become sidelength
    - same container, only thing that changes is the variable we previously declared, "sideLength"
    - once the answer is outputted, a new grid with the new sidelength should be created
*/ 


// step 1: create a container that is fixed in size
// create a new element that's a div 
// add the id for container
// in css, set width and height for container to 1000px

function createContainer() {
    // container holder so I can center the container on DOM
    let containerHoldingDiv = document.createElement("div");
    document.body.appendChild(containerHoldingDiv);
    containerHoldingDiv.setAttribute("id", "containerHoldingDivId");

    // creating the container itself
    let createdContainer = document.createElement("div");
    containerHoldingDiv.appendChild(createdContainer);
    createdContainer.setAttribute("id", "containerId");
}

/* step 2: create a 16 by 16 grid of square divs
    - create a parent div with the Id "container"
    - variables: 
        - sideLength = initially at 16
            - side length is also the less than in the for loop for row and column
    - create a row of 16 squares, 16 times:
        - use two loops: 
            - loop 1: 16 rows
            - loop 2: 16 columns
                - put constant: etch-square here */



// create a parent div with the Id "container" and get its width from the CSS stylesheet
let containerSideLength;
let container;
function setContainerSideLength() {
    container = document.getElementById("containerId");
    let containerStyle = window.getComputedStyle(container);
    containerSideLength = containerStyle.width;
    console.log(containerSideLength, "container side length");
}

// variable to alter the grid size - this will factor into the for loop - NUMBER OF BOXES IN GRID WILL CHANGE WHEN
// WE GET A BUTTON CLICK AND USER INPUTS NUMBER
let numberOfBoxesInGrid = 16;
// turned container side length into an int because I didn't want "px" in my calculations
function setBoxSideLength() {
    let containerSideLengthInt = containerSideLength.slice(0, 3);
    let boxSideLength = containerSideLengthInt / numberOfBoxesInGrid;
    console.log(numberOfBoxesInGrid, "number of boxes in grid, function setBoxSideLength");
    console.log(containerSideLength, "container side length, function setBoxSideLength");
    console.log(boxSideLength, "box side length, function setBoxSideLength");
}


// create a parent div with the Id "container"

// add a row of etch squares
function addGridBoxesToContainer() {
    for (let i = 0; i < numberOfBoxesInGrid; i++) {
        let createEtchSquare = document.createElement("div");
        let addClassToEtchSquare = createEtchSquare.setAttribute("class", "etchSquareClass");
        let appendEtchSquare = container.appendChild(createEtchSquare);
    }
}



// use button to get alert for number of boxes in grid
let gridDimensionButtonId = document.getElementById("gridDimensionButton")
gridDimensionButtonId.addEventListener('click', askForGrid);



// come back to this
function askForGrid() {
    let numberOfBoxesInGrid = prompt("What do you want the box's length to be?")
    if (numberOfBoxesInGrid < 0 || numberOfBoxesInGrid > 100) {
        console.log("please enter an integer between 1 and 100")
    } else {

    }
}
// for (let i = 0; i < )




// add etchSquares to cover all the container


// executing functions above
createContainer();
setContainerSideLength();
setBoxSideLength();
addGridBoxesToContainer();
