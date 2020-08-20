import 'regenerator-runtime'; /* for async await transpile */
import './components/app-bar';
import './components/jumbotron';
import './components/footer';
import './components/alert';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/loading.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.nav-toggler'),
  drawer: document.querySelector('.site-navbar ul'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
