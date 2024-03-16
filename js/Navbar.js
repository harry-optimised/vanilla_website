class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('/styles/styles.css');
      </style>
      <div class="nav-bar">
        <div class="hamburger"><h6>&#9776;</h6></div>
        <div class="nav-bar-left">
          <div class="nav-item"><h1 style="font-weight: 1000; font-size: 200%"><a href="/index.html">Harrys Projects</a></h1></div>
       
          <div class="nav-bar-row">
            <div class="nav-item"><h4><a href="/index.html">Home</a></h4></div>
            <div class="nav-item"><h4><a href="/system_design.html">System Design</a></h4></div>
            <div class="nav-item"><h4><a href="/object_detection.html">Object Detection</a></h4></div>
            <div class="nav-item"><h4><a href="/active_learning.html">Active Learning</a></h4></div>
          </div>
        </div>
        <div class="nav-bar-right">
          <a href="https://www.linkedin.com/in/harry-j-turner/"><img style="width: 24px; margin-right: 16px" src="https://img.icons8.com/ios-filled/50/2F344C/linkedin.png" alt="LinkedIn logo"/></a>     
        </div>
      </div>
      <div class="nav-menu">
        <h4><a href="/index.html">Home</a></h4>
        <hr>
        <h4><a href="/system_design.html">System Design</a></h4>
        <h4><a href="/object_detection.html">Object Detection</a></h4>
        <h4><a href="/active_learning.html">Active Learning</a></h4>
        <hr>
        <br>
        <a href="https://www.linkedin.com/in/harry-j-turner/"><img style="width: 24px; margin-right: 16px" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn logo"/></a>  

      </div>
    `;
    this.shadowRoot.querySelector('.hamburger').addEventListener('click', () => {
      this.shadowRoot.querySelector('.nav-menu').classList.toggle('active');
      this.shadowRoot.querySelector('.hamburger').classList.toggle('active');
    });
  }
}

customElements.define('nav-bar', Navbar);
