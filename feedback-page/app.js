const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActiveRating();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

function removeActiveRating() {
    for (let i=0; i<ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
    <p class="heart">❤️</p>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    `
});