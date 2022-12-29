
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav-bar">
          <div class="nav-item"><h1><a href="/index.html">Home</a></h1></div>
          <div class="nav-item"><h1><a href="/machine_learning.html">ML</a></h1></div>
          <div class="nav-item"><h1><a href="https://drive.google.com/file/d/11anz-75-LU9RDeFTEp7I4waJ9JW7eCWd/view?usp=share_link">CV</a></h1></div>
      </div>
    `
  }
}

customElements.define('nav-bar', Navbar)