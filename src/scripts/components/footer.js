class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const fullDate = new Date();
    const getYear = fullDate.getFullYear();

    this.innerHTML = `
    <p>
      Copyright &copy; ${getYear} Alfiandri Putra Perdana. All Rights Reserved.
    </p>`;
  }
}

customElements.define('footer-page', Footer);
