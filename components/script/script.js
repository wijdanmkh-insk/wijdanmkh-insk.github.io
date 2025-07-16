document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi tombol
  setupSkipBtn(
    '.skip-img',
    './components/img/buttons/skip-intro/skip-intro.png',
    './components/img/buttons/skip-intro/skip-intro-pressed.png'
  );

  const skipBtn = document.querySelector('.skip-button');

  // 2. Munculin tombol skip setelah 10 detik
  setTimeout(() => {
    skipBtn.classList.add('visible');

    // 3. Aktifkan blinking setelah tombol kelihatan
    setTimeout(() => {
      skipBtn.classList.add('blinking');
    }, 1000); // tunggu 1s biar transisi muncul dulu
  }, 10000); // tombol muncul setelah 10 detik

  // 4. Event klik tombol skip
  skipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startMainSite();
  });
});


function setupSkipBtn(imgSelector, normalSrc, hoverSrc) {
  const skipImg = document.querySelector(imgSelector);
  if (!skipImg) return;

  skipImg.addEventListener('mouseenter', () => {
    skipImg.src = hoverSrc;
  });

  skipImg.addEventListener('mouseleave', () => {
    skipImg.src = normalSrc;
  });
}



function skipIntro(){
    const skipBtn = document.querySelector('.skip-button');
    skipBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        startMainSite();
    });
}

function startMainSite(){
    const intro = document.querySelector('.intro');
    const main = document.querySelector('.main');
    const sidebar = document.querySelector('.sidebar-links');
    const skipBtn = document.querySelector('.skip-button');

  intro.classList.add('hidden');
  skipBtn.classList.add('hidden');

  main.classList.remove('hidden');

  sidebar.classList.remove('disabled');
  sidebar.classList.add('active');
}

