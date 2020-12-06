
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav-bar">
          <div class="nav-item"><h1><a href="/vanilla_website/index.html">Home</a></h1></div>
          <div class="nav-item"><h1><a href="/vanilla_website/about.html">About</a></h1></div>
          <div class="nav-item"><h1><a href="/vanilla_website/machine_learning.html">Machine Learning</a></h1></div>
          <div class="nav-item"><h1><a href="/vanilla_website/books.html">Books</a></h1></div>
          <div class="nav-item"><h1><a href="/vanilla_website/blog.html">Blog Posts</a></h1></div>
          <div class="nav-item"><h1><a href="/vanilla_website/projects.html">Projects</a></h1></div>
      </div>
    `
  }
}

customElements.define('nav-bar', Navbar)