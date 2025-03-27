// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Countdown Timer
const eventDate = new Date("2025-04-05T10:00:00").getTime(); // Update to actual event date

const countdownFunc = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunc);
        document.getElementById("timer").innerText = "Event Started!";
    }
}, 1000);

// Form Submission
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").style.display = "block";
    this.reset();  // Clear form after submission
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
