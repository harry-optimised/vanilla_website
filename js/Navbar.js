class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('/styles/styles.css');
      </style>
      <div class="nav-bar">
        <div class="hamburger"><h6>&#9776;</h6></div>
        <div class="nav-bar-left">
          <div class="nav-item"><h1 style="font-weight: 1000; font-size: 200%"><a href="/index.html">Harry Turner</a></h1></div>
       
          <div class="nav-bar-row">
            <div class="nav-item"><h4><a href="/index.html#professional">Professional Work</a></h4></div>
            <div class="nav-item"><h4><a href="/index.html#writing">Writing</a></h4></div>
            <div class="nav-item"><h4><a href="/index.html#projects">Fun</a></h4></div>
          </div>
        </div>
      </div>
      <div class="nav-menu">
        <h4><a href="/index.html">Home</a></h4>
        <hr>
        <h4><a href="/index.html#professional">Professional Work</a></h4>
        <h4><a href="/index.html#writing">Writing</a></h4>
        <h4><a href="/index.html#projects">Fun</a></h4>
        <hr>
        <br>
      </div>
    `;
    this.shadowRoot
      .querySelector(".hamburger")
      .addEventListener("click", () => {
        this.shadowRoot.querySelector(".nav-menu").classList.toggle("active");
        this.shadowRoot.querySelector(".hamburger").classList.toggle("active");
      });
  }
}

customElements.define("nav-bar", Navbar);
