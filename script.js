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

let container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("id", "container");