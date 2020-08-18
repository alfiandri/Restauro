class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.header = this.getAttribute('header') || null;
    this.sub = this.getAttribute('sub') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero" role="img" dan aria-label="Image Restauran Jumbotron"> 
        <div class="hero-text">
          <h1>${this.header}</h1>
          <h2>${this.sub}</h2>
      </section>`;
  }
}

customElements.define('jumbo-tron', Jumbotron);
