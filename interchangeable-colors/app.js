const allBtnElems = document.querySelectorAll(".btn");
const body = document.body;

allBtnElems.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.className = "";
        body.classList.add(`${btn.classList[1]}`);
    });
});