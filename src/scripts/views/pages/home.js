import Loading from '../templates/loading';
import RestoSource from '../../data/resto-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="explore-restaurant">
      <h1 class="header-explore">Explore Restaurant</h1>

      <div id="loading"></div>
      
      <div class="restaurant-list">
        
      </div>
    </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.innerHTML = Loading();
    const restaurantContainer = document.querySelector('.restaurant-list');
    restaurantContainer.innerHTML = '';

    try {
      const data = await RestoSource.listRestaurant();
      loading.style.display = 'none';
      data.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      loading.innerHTML = '<h2 class="restaurant-error">Oops! Looks like you\'re offline, please check your Internet Connection!</h2>';
    }
  },
};

export default Home;
