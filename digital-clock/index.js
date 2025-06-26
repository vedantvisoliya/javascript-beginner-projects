// getting the hours, minutes, seconds and am pm span elements
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");

// this function will update the time in the clock
function updateClock(){
    // getting real time using Date() module
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // changing clock to 12hrs format and changing am pm
    // according to it.
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // if the digits are single there should be a zero as first
    h = h < 10 ? ('0' + h):h;
    m = m < 10 ? ('0' + m):m;
    s = s < 10 ? ('0' + s):s;

    // changing the inner text
    hoursElem.innerText = h;
    minutesElem.innerText = m;
    secondsElem.innerText = s;
    ampmElem.innerText = ampm;

    // set time out function to call this
    // function after every 1 second
    // to update the clock
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();