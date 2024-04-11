const BADGE_MAP = {
  front_end: "https://img.shields.io/badge/front_end-blue",
  human_computer_interaction:
    "https://img.shields.io/badge/human_computer_interaction-teal",
  back_end: "https://img.shields.io/badge/back_end-315C2B",
};

class ArticleCardComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title", "url", "image-src", "started", "description"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const url = this.getAttribute("url");
    const imageSrc = this.getAttribute("image-src");
    const started = this.getAttribute("started");
    const description = this.getAttribute("description");
    const badges = this.getAttribute("badges");

    let badgeHTML = "";
    if (badges) {
      const badgeList = badges.split(",");
      badgeHTML = badgeList
        .map((badge) => {
          const badgeURL = BADGE_MAP[badge];
          return `<img src="${badgeURL}" style="margin-right: 8px;"/>`;
        })
        .join("");
    }

    this.shadowRoot.innerHTML = `
      <style>
          @import url('/styles/styles.css');
      </style>
      <div class="content-card">
          <div class="content-card-left">
              <a href="${url}"><img src="${imageSrc}" /></a>
          </div>
          <div class="content-card-right">
              <h3><a href="${url}">${title}</a></h3>
              <p><i>${started}</i></p>
              <p>${description}</p>
              <div class="badge-list card">${badgeHTML}</div>
          </div>
      </div>
    `;
  }
}

customElements.define("article-card", ArticleCardComponent);
