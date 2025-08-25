document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.nav-default');
  window.onscroll = () => {
      if (window.scrollY > 500) {
          navbar.classList.add('nav-scrolled');
      } else {
          navbar.classList.remove('nav-scrolled');
      }
  };
});