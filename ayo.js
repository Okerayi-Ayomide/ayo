document.addEventListener("DOMContentLoaded",() => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener(" submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message I'll get back to you soon");
    }) ;
});