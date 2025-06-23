// getting textarea element, total counter element,
// remaining counter element.
const textareaElem = document.getElementById("textarea");
const totalCounterElem = document.getElementById("total-counter");
const remainingCounterElem = document.getElementById("remaining-counter");

// adding an event listener to the text area element to track the
// numbers of character are type and removed.
textareaElem.addEventListener("keyup", () => {
    // calling the updateCounter() to update the counter with real time
    updateCounter();
});

// function for updating the counters
function updateCounter() {
    // getting the number of character are there in the textarea
    // and changing the inner text of total-counter
    // textarea.value.length gives the length of present characters
    totalCounterElem.innerText = textareaElem.value.length;

    // getting the remaining counter using the getAttribute("maxlength")
    // methods subtracting textareaElem.value.length from it.
    // and then changing the inner text of remaining-counter
    remainingCounterElem.innerText = ((textareaElem.getAttribute("maxlength")) - textareaElem.value.length);
}

// calling it to update it for the first time.
updateCounter();
