// creating a dummy data for testimonial slider
// it is list of map(having key value pairs).
const testimonial = [
    {
        "name": "Alexander Johnson",
        "photoURL": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "text": "I am beyond impressed with the quality of Asus laptops. Their sleek design, powerful performance, and durability make them a top choice for professionals and students alike. I can confidently say that Asus has exceeded my expectations in every way.",
    },
    {
        "name": "Emily Johnson",
        "photoURL": "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg",
        "text": "Nothing offers a wide selection of cutting-edge phones that are perfect for staying connected on the go. Their sleek designs and advanced features make them a top choice for tech-savvy consumers.",
    },
    {
        "name": "Sarah Johnson",
        "photoURL": "https://images.pexels.com/photos/26100579/pexels-photo-26100579.jpeg",
        "text": "Microsoft's Windows product is unparalleled in its ease of use and functionality. I can't imagine using any other operating system now. The seamless integration with all my devices is truly impressive.",
    },
    {
        "name": "Anna Thompson",
        "photoURL": "https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg",
        "text": "I am extremely satisfied with the exceptional quality and performance of Lenovo laptops. The sleek design and advanced features make it a top choice for both work and entertainment. I highly recommend Lenovo to anyone looking for a reliable and powerful laptop.",
    },
];

// getting elements from the index.html (dom manipulation).
const imgElem = document.querySelector("img");
const textElem = document.querySelector(".text");
const userNameElem = document.querySelector(".user-name");

let index = 0; // iterator for the testimonial data.

// function to update the testimonial data.
function updateTestimonialSlider() {
    // getting the values from the map.
    const {name, photoURL, text} = testimonial[index];

    // assigning the values.
    imgElem.src = photoURL; // changing the source of image.
    textElem.innerText = text; // updating the text.
    userNameElem.innerText = `- ${name}`; // updating the user name.

    index++; // increment the iterator.

    // for continous updation of data
    if (index === testimonial.length) {
        index = 0;
    }

    // calling settime out function to update the testimonial data
    // after every 5 sec continously.
    setTimeout(() => {
        updateTestimonialSlider();
    }, 7000);
}

updateTestimonialSlider();