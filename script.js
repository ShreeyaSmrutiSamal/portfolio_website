// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Bar Toggle
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

document.querySelector('.logo').addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    } else {
        alert('Thank you for your message!');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
