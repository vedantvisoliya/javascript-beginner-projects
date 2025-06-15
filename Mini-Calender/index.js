// get the month name element
const monthNameElem = document.getElementById("month-name");
// get the day name element
const dayNameElem = document.getElementById("day-name");
// get the date element
const dateElem = document.getElementById("date");
// get the year element
const yearElem = document.getElementById("year");

// creating a date Object
const date = new Date();

// now changing the inner text of the elements
monthNameElem.innerText = date.toLocaleString(('en'), {
    month: "long",
});

dayNameElem.innerText = date.toLocaleString(('en'), {
    weekday: "long",
});

dateElem.innerText = date.getDate();

yearElem.innerText = date.getFullYear();