const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}
const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
    reservationForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("🎉 Your table has been booked successfully!");

        reservationForm.reset();
    });
}
const images = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg"
];

let index = 0;

const slider = document.getElementById("slider");

if (slider) {
    setInterval(() => {
        index++;

        if (index >= images.length) {
            index = 0;
        }

        slider.src = images[index];
    }, 3000);
}