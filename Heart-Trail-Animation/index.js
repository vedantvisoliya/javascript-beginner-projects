const bodyElem = document.querySelector("body");

bodyElem.addEventListener(("mousemove"), (event)=>{
    // getting the postion of the cursor.
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // creating span element
    const spanElem = document.createElement("span");

    // changing the postion of the created span element
    spanElem.style.left = xPos + "px";  
    spanElem.style.top = yPos + "px";

    // changing the size of the heart image
    const size = Math.random() * 100;
    spanElem.style.width = size + "px";
    spanElem.style.height = size + "px";

    // adding created span element to the body
    bodyElem.appendChild(spanElem);

    // removing the span element after 3 seconds
    setTimeout(() => {
        spanElem.remove();
    }, 3000);
});