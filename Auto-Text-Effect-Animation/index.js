// getting the container class div.
const containerClassElem = document.querySelector(".container");

// array of the carrer word
const carrers = ["youtuber", "web developer", "freelancer", "instructor"];

// iterator
let characterIndex = 0;
let carrersIndex = 0;

// calling the update text function
updateText();

// update text function
function updateText() {
    characterIndex++;
    // changing the inner html of the element
    containerClassElem.innerHTML = `<h1>I am ${carrers[carrersIndex].slice(0,1) == 'i' ? "an":'a'} ${carrers[carrersIndex].slice(0,characterIndex)}.<h1>`;

    if (characterIndex === carrers[carrersIndex].length) {
        characterIndex = 0;
        carrersIndex++;
    }

    if (carrersIndex === carrers.length) {
        carrersIndex = 0;
    }
    
    setTimeout(updateText, 400);
}