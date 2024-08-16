// JavaScript to toggle the 'show' class
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav ul");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});
