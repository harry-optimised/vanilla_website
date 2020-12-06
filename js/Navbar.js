
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav-bar">
          <div class="nav-item"><h1><a href="/harrysprojects.com/index.html">Home</a></h1></div>
          <div class="nav-item"><h1><a href="/harrysprojects.com/about.html">About</a></h1></div>
          <div class="nav-item"><h1><a href="/harrysprojects.com/machine_learning.html">Machine Learning</a></h1></div>
          <div class="nav-item"><h1><a href="/harrysprojects.com/books.html">Books</a></h1></div>
          <div class="nav-item"><h1><a href="/harrysprojects.com/blog.html">Blog Posts</a></h1></div>
          <div class="nav-item"><h1><a href="/harrysprojects.com/projects.html">Projects</a></h1></div>
      </div>
    `
  }
}

customElements.define('nav-bar', Navbar)