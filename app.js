//Selecting the container div
const gridContainer = document.querySelector(".container")

//Creating a function that creates 16x16 grids 

let gridGenerated = false; // Flag to track if the grid has been generated

function sixteenGrid () {

    if (gridGenerated) return; // Checks if the the grid already has been generated


    for(i = 0; i < 256; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square"); // Add class for styling
        gridContainer.appendChild(gridSquare);
    }

    gridGenerated = true; // Set the flag to true to prevent future grid generation
}

//Creating a button that creates a 16x16 grid
const button = document.createElement("button");
button.textContent = "Generate 16x16 Grid";
button.classList.add("button-style");

button.addEventListener("click", sixteenGrid); //invoke the function sixteenGrid when the button is clicked


// Append the button to the body (or any other element outside of gridContainer)
document.body.insertBefore(button, gridContainer);

// Creating a new button that refreshes the page
const button2 = document.createElement("button"); //Creating second button
button2.textContent = "Create custom Grid";


// Creating a function that refreshes the page 
function handleClick (){
    
    
    gridContainer.innerHTML = "";
    gridGenerated = false;

    // Asking the user for a new grid size
    let input = prompt("What grid size do you choose? \n(Enter a greater integer than 1)");

        let gridSize = parseInt(input); // Convert the input to an integer

        //Check if 
        if (Number.isInteger(gridSize) && gridSize >= 2 && gridSize <= 100) {
            console.log("test worked");

            // Calculating the size of each grid square to ensure they fit perfectly
            const containerSize = 630; // Container size
            const squareSize = containerSize / gridSize; // Size of each square 





            for(i = 0; i < gridSize * gridSize; i++) {
                const gridSquare = document.createElement("div");
                gridSquare.classList.add("grid-square"); // Add class for styling

                 // Set the width and height to make them fit perfectly in the container
                gridSquare.style.width = `${squareSize}px`;
                gridSquare.style.height = `${squareSize}px`;

                gridContainer.appendChild(gridSquare);
            }
        }

        else {
            alert("Please enter a valid integer greater than 1");
            location.reload();
        }
}
button2.addEventListener("click", handleClick); // Invoke a refresh when the button is clicked
document.body.insertBefore(button2, gridContainer); // Appending the button to the body of the page