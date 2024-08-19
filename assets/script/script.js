document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav ul");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    function change() {
        if (index < queue.length) {
            majors.classList.add('fade-out');
    
            setTimeout(() => {
                majors.textContent = queue[index];

                majors.classList.remove('fade-out');
                majors.classList.add('fade-in');

                if (index === 0 || index === 1) { 
                    majors.classList.add('strikethrough');
                } else {
                    majors.classList.remove('strikethrough');
                }
    
            }, 1000);
        }
    
        index++;

        if (index < queue.length) {
            setTimeout(() => {
                majors.classList.add('fade-out');
    
                setTimeout(() => {
                    majors.classList.remove('fade-out');
                    majors.textContent = '';
                    clearInterval(intervalId);
                }, 3000); 
            }, 3000);
        }
    }

    const intervalId = setInterval(change, 3000); 

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

    let index = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("photo");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    index++;
    
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block"; 
    setTimeout(showSlides, 2000); 
}

});
