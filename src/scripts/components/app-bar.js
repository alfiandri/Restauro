class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="navbar-area">
        <div class="container">
          <nav class="site-navbar">
            <a href="#" class="site-logo">Restauro</a>

            <button class="nav-toggler" aria-label="toggle navigation">
              <span></span>
            </button>

            <ul>
              <li><a href="#/home">Home </a></li>
              <li><a href="#/favorite">Favorite </a></li>
              <li><a href="https://github.com/alfiandri" target="_blank" rel="noopener noreferrer">About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>`;
  }
}

customElements.define('app-bar', AppBar);
