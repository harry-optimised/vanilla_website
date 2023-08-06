
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav-bar">
        <div class="nav-bar-left">
          <div class="nav-item"><h1 style="font-weight: 1000; font-size: 200%"><a href="/index.html">Harrys Blog</a></h1></div>
          <div class="nav-item"><h1><a href="/index.html">Home</a></h1></div>
          <div class="nav-item"><h1><a href="https://drive.google.com/file/d/11anz-75-LU9RDeFTEp7I4waJ9JW7eCWd/view?usp=share_link">CV</a></h1></div>
        </div>
        <a href="https://www.linkedin.com/in/harry-j-turner/"><img style="width: 24px; margin-right: 16px" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="harry turner logo"/></a>     
      </div>
    `
  }
}

customElements.define('nav-bar', Navbar)