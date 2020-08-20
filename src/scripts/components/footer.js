class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const fullDate = new Date();
    const getYear = fullDate.getFullYear();

    this.innerHTML = `
    <footer>
      <p>
        Copyright &copy; ${getYear} Alfiandri Putra Perdana. All Rights Reserved.
      </p>
    </footer>`;
  }
}

customElements.define('footer-page', Footer);
