// getting the .image-container and .button
const imageContainerElem = document.querySelector(".image-container");
const btnElem = document.querySelector(".btn");

// now adding an event listner to button to track the clicks
btnElem.addEventListener("click", (event) => {
    addNewImages();
});

// create a function to add new images to .image-container element
function addNewImages() {
    // for 3 images at a single time
    for (let i = 0; i < 3; i++) {
        // create a new image element
        const newImageElem = document.createElement("img");
        // add the src
        newImageElem.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        // append the child in the .image-container
        imageContainerElem.appendChild(newImageElem);
    }
}
