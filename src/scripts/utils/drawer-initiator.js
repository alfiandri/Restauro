const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(button, event, drawer);
    });
  },

  _toggleDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.toggle('toggler-open');
    drawer.classList.toggle('open');
  },

  _closeDrawer(button, event, drawer) {
    event.stopPropagation();

    if (drawer.classList.contains('open')) {
      button.click();
    }
  },
};

export default DrawerInitiator;
