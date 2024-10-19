//Selecting the container div
const gridContainer = document.querySelector(".container")

//Creating a function that creates 16x16 grids 

function sixteenGrid () {
    for(i = 0; i < 256; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square"); // Add class for styling
        gridContainer.appendChild(gridSquare);
    }

    button.disabled = true; // Disable the button after creating the grid
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
    
    
    setTimeout(() => {
        location.reload(); // This will refresh the page after 3 second

    }, 3000);
    let input = prompt("What grid size do you choose? \n(Enter a greater integer than 1)");

        let gridSize = parseInt(input); // Convert the input to an integer

        //Check if 
        if (Number.isInteger(gridSize) && gridSize % 2 === 0) {
            console.log("test worked");
            
        }

        else {
            alert("Please enter a valid integer greater than 1");
            location.reload();
        }
}
button2.addEventListener("click", handleClick); // Invoke a refresh when the button is clicked
document.body.insertBefore(button2, gridContainer); // Appending the button to the body of the page