// getting body and input element
const bodyElem = document.querySelector("body");
const inputElem = document.querySelector(".input");

// getting the checked value form the local storage 
// but parsing it to bool as it is string
inputElem.checked = JSON.parse(localStorage.getItem("mode"));

// updates the body color to black if checked
// else changes to white
function updateBody() {
    if (inputElem.checked) {
        bodyElem.style.backgroundColor = "black";
    }
    else {
        bodyElem.style.backgroundColor = "white"; 
    }
}

// updates the local storage 
// if it is dark mode
// "mode" = true
// else
// "mode" = false

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputElem.checked));
}

// calling this function to retain the previous state
// if it is dark mode change to dark mode
// else change to light mode
updateBody();

// added event listener to the input feild to track if
// it is clicked or not
inputElem.addEventListener("click", () => {
    // calling both function when the label is clicked
    updateBody();
    updateLocalStorage();
}); 

