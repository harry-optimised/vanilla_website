
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav-bar">
          <div class="nav-item"><h1><a href="/index.html">Home</a></h1></div>
          <div class="nav-item"><h1><a href="/machine_learning.html">Machine Learning</a></h1></div>
          <div class="nav-item"><h1><a href="/system_design.html">System Design</a></h1></div>
          <div class="nav-item"><h1><a href="/blog.html">Blog</a></h1></div>
          <div class="nav-item"><h1><a href="/cv.html">CV</a></h1></div>
      </div>
    `
  }
}

customElements.define('nav-bar', Navbar)