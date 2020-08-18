import FavoriteRestauroIdb from '../../data/favorite-restauro-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const Favorite = {
  async render() {
    return `
    <section id="explore-restaurant">
      <h1 class="header-explore">Your Favorite Restaurant</h1>

      <div id="loading"></div>
      
      <div class="restaurant-list">
        
      </div>
    </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const favContainer = document.querySelector('.restaurant-list');
    loading.innerHTML = Loading();

    try {
      const data = await FavoriteRestauroIdb.getAllRestauros();
      if (data.length === 0) {
        loading.innerHTML = `
          <h2 class="restaurant-error">You don't have any favorite Restaurant, please find one at <a href="#/home">Home</a></h2>
        `;

        return;
      }
      loading.style.display = 'none';
      data.forEach((restaurant) => {
        favContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      loading.innerHTML = '<h2 class="restaurant-error">Oops! Looks like you\'re offline, please check your Internet Connection!</h2>';
    }
  },
};

export default Favorite;
