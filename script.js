document.addEventListener('DOMContentLoaded', () => {
  navbarAnimate();
  readProjects();
});

//ANIMASI NAVBAR
function navbarAnimate(){
  const navbar = document.querySelector('.nav-default');
  window.onscroll = () => {
      if (window.scrollY > 500) {
          navbar.classList.add('nav-scrolled');
      } else {
          navbar.classList.remove('nav-scrolled');
      }
  };
}
//JSON FILE READER FOR GALLERY SHOWCASE
function readGallery(){
  fetch('src/files/gallery.json')
    .then(res => res.json())
    .then(data => {
      const imgs = document.querySelectorAll('.img-inject');

      data.forEach((item, idx) => {
        if (!imgs[idx]) return;

        const img = imgs[idx];
        img.src = item.src;
        img.alt = item.alt || `Gallery ${idx+1}`;
        img.loading = 'lazy';

        if (item.url){
          const a = document.createElement('a');
          a.href = item.url;
          a.target = '_blank';
          a.rel = 'noopener';
          img.replaceWith(a);
          a.appendChild(img);
        }
      });
    })
    .catch(err => console.error('Gagal load gallery JSON:', err));
}

document.addEventListener('DOMContentLoaded', readGallery);



//JSON FILE READER FOR PROJECTS SHOWCASE
function readProjects(){
  fetch('src/files/projects.json')
    .then(r => r.json())
    .then(data => {
      const list = document.getElementById("list");
      if (!list) return console.error('#list gak ketemu');
      const frag = document.createDocumentFragment();

      for (const item of data) {
        const card = document.createElement("article");
        card.className = "project-card";

        const cardcontainer = document.createElement("div");
        cardcontainer.className = "card-container"; // atur layout di CSS

        const imgproj = document.createElement("div");
        imgproj.className = "imgproj";
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title || 'Project image';
        img.loading = 'lazy';
        imgproj.append(img);

        const title = document.createElement("h3");
        title.textContent = item.title ?? 'Untitled';

        const desc = document.createElement("p");
        desc.textContent = item.description ?? '';

        const jobs = document.createElement("div");
        jobs.className = "jobs";
        (item.job || []).forEach(job => {
          const badge = document.createElement("span");
          badge.className = "job";
          badge.textContent = job;
          jobs.append(badge);
        });

        const link_cont = document.createElement("div");
        link_cont.className = "link-container";
        if (item.link) {
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = "Link »";
          link_cont.append(link);
        }

        // isi ke dalam container, baru container ke card
        cardcontainer.append(imgproj, title, desc, jobs, link_cont);
        card.append(cardcontainer);
        frag.append(card);
      }

      list.textContent = '';
      list.append(frag);
    })
    .catch(err => console.error("Gagal load JSON:", err));
}