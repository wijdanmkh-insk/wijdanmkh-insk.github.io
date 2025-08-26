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
    .then(response=>response.json())
    .then(data=>{
        const container=document.getElementById("container");
        const frag=document.createDocumentFragment();

        for(const item of data){
            const card=document.createElement("span");
            card.className="gallery-divider"

            const imgcont=document.createElement("div");
            imgcont.className="img-container";

            const img=document.createElement("img");
            img.src=item.image;
            imgcont.append(img);
            card.append(imgcont);
            frag.append(card);
        }
        container.append(frag);
    })
    .catch(err=>console.error("Gagal load JSON:", err));
}


//JSON FILE READER FOR PROJECTS SHOWCASE
function readProjects(){
    fetch('src/files/projects.json')
    .then(response => response.json())
    .then(data=>{
        const list = document.getElementById("list");
        const frag = document.createDocumentFragment();

        for(const item of data){
            const card = document.createElement("article");
            card.className = "project-card";

            const imgproj=document.createElement("div");
            imgproj.className="imgproj";

            const img = document.createElement("img");
            img.src=item.image;
            imgproj.append(img);

            const title=document.createElement("h3");
            title.textContent=item.title;

            const desc=document.createElement("p");
            desc.textContent=item.description;

            const jobs=document.createElement("div");
            jobs.className="jobs";

            const link_cont=document.createElement("div");
            link_cont.className="link-container";

            const link=document.createElement("a");
            link.href=item.link;
            link.textContent="Link >>";
            link_cont.append(link);

            (item.job||[]).forEach(job=>{
                const badge=document.createElement("span");
                badge.className="job";
                badge.textContent=job;
                jobs.append(badge);
            });
            card.append(imgproj, title, desc, jobs, link_cont);
            frag.append(card);
        }
        list.append(frag);
    })
    .catch(err=>console.error("Gagal load JSON:", err));
}