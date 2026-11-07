
// GET TODAY'S DATE

const dateInput = document.getElementById("date");

function getToday() {
    const today = new Date();

    return new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];
}

dateInput.min = getToday();


// APPOINTMENT BOOKING

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET CUSTOMER DETAILS

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const car = document.getElementById("car").value.trim();

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("result");

    // MOBILE VALIDATION

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10 digit mobile number!");
        return;
    }

    // DATE VALIDATION

    if (date < getToday()) {
        alert("Please select a valid appointment date.");
        return;
    }

    // DISPLAY CONFIRMATION

    result.textContent =
        "✓ APPOINTMENT REQUEST SUBMITTED!\n\n" +
        "Customer: " + name + "\n" +
        "Mobile: " + phone + "\n" +
        "Car: " + car + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Message: " + (message || "No additional details") +
        "\n\nPlease contact Sudeep Car Service Center to confirm.";

    result.style.display = "block";

    // RESET FORM

    form.reset();

    dateInput.min = getToday();

});


// 3D MOUSE TILT EFFECT

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 15;

        const rotateY = (x - centerX) / 15;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});


// NAVIGATION ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
