const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './components/style/style.css';
document.head.appendChild(link);

class my_carousel extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        const dataSrc = this.getAttribute('data-src');
        fetch(dataSrc)
        .then(res=>res.json())
        .then(data =>{
            const html = data.map(item => `
            <div class="full-carousel">
                <div class="bg-carousel">
                    <img src="./components/img/carousel/bg-card.png" alt="bg">
                    
                    <div class="carousel">
                        <div class="carousel-photo">
                            <div class="bg-carousel"><img src="${item.image}" alt="project"></div>
                        </div>
                    
                        <div class="carousel-text">
                            <div class="carousel-title pixelify-sans-title">${item.title}</div>
                            <div class="carousel-detail pixelify-sans-normal">${item.detail}</div>
                        </div>

                        <div class="learn-more pixelify-sans-normal">Learn More >> </div>
                    </div>

                    
                </div>
            </div>
        `).join('');

        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;

        const linkStyle = document.createElement("link");
        linkStyle.rel = "stylesheet";
        linkStyle.href = "./components/style/style.css";

        this.shadowRoot.appendChild(linkStyle)
        this.shadowRoot.appendChild(wrapper);
      })

        .catch(err => {
            this.shadowRoot.innerHTML = `<p style="color:red;">Failed to load carousel: ${err}</p>`;
            console.error("Gagal load JSON:", err);
        });
  }
}

customElements.define('my-carousel', my_carousel);
