document.addEventListener("DOMContentLoaded", function() {
    // Toggle Navbar Menu
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.querySelector('.nav ul');

    navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    });

    //Change Image
    function frown() {
        const frown = document.getElementById('me-frown');
        const hoverchange = document.getElementById('div');
        const quarterCircle = document.getElementById('quarter-circle');
        const rootStyles = getComputedStyle(document.documentElement);

        hoverchange.addEventListener('mouseenter', () => {
            frown.style.opacity = 0;
            setTimeout(() => {
                frown.src = './assets/img/me.png';
                frown.style.opacity = 1;
            }, 500);

            quarterCircle.style.backgroundColor = rootStyles.getPropertyValue('--a4');
        });

        hoverchange.addEventListener('mouseleave', () => {
            frown.style.opacity = 0;
            setTimeout(() => {
                frown.src = './assets/img/me-frown.png';
                frown.style.opacity = 1;
            }, 500);

            quarterCircle.style.backgroundColor = rootStyles.getPropertyValue('grey');
        });
    }
    frown();
});
