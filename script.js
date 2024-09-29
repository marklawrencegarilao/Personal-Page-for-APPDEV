// Contact form validation and interaction
document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form validation: check if fields are not empty
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        alert(`Thank you, ${name}, your message has been sent!`);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});