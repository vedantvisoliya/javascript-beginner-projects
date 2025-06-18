// getting button element.
const btnElem = document.querySelector(".btn");

// adding event lister to the button element
// to track the movement of cursor in and out of the
// button element , we will use 'mouseover' event
// to track the position of cursor getting inside
// the element and getting out of the element.

btnElem.addEventListener('mouseover', (event) => {
    // now we will take the entering coordinates of the cursor
    // and we subtract the intial coordinates to get 
    // only the button coordinates.
    const x = (event.pageX) - (btnElem.offsetLeft);
    const y = (event.pageY) - (btnElem.offsetTop);

    // we have created (--xPos and --ypos)variables in  
    // in (css).btn::before to access the left and top property,
    // as we can not directly change the left and top property
    // so we will change the values of variables to change the
    // values of left and top property,
    // setProperty() function will help us doing this.

    // changing the x position i.e left
    btnElem.style.setProperty("--xPos", x + "px");
    // changing the y position i.e top
    btnElem.style.setProperty("--yPos", y + "px");
    
});