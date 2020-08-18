class Alert extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<div id="restaurant-alert"></div>';
  }
}

customElements.define('my-alert', Alert);
