import Loading from '../templates/loading';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';
import AlertInitiator from '../../utils/alert-initiator';
import FavRestauroDb from '../../data/favorite-restauro-idb';

const Detail = {
  async render() {
    return `
    <section>
      <div id="loading"></div>
      <div id="detail-restaurant"></div>
      
      <div id="likeButtonContainer"></div>
      <div class="restaurant-form-review">
        <h3 class="restaurant-title-review">Give Us Your Review</h3>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input name="name" type="text" class="form-control" id="name">
          </div>
          <div class="mb-3">
            <label for="review" class="form-label">Your Review</label>
            <input name="review" type="text" class="form-control" id="review">
          </div>
          <button id="submit" type="submit" class="btn-submit">Submit Your Review</button>
        </form>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detail-restaurant');
    const formReviewContainer = document.querySelector('.restaurant-form-review');
    const likeButton = document.querySelector('#likeButtonContainer');

    loading.innerHTML = Loading();

    try {
      const detailRestaurant = await RestoSource.detailRestaurant(url.id);
      loading.style.display = 'none';
      const { restaurant } = detailRestaurant;
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: likeButton,
        favoriteRestaurant: FavRestauroDb,
        restaurant,
      });

      const btnSubmit = document.querySelector('#submit');
      const inputName = document.querySelector('#name');
      const inputReview = document.querySelector('#review');

      btnSubmit.addEventListener('click', async (event) => {
        event.preventDefault();
        if (inputName.value === '' || inputReview.value === '') {
          await AlertInitiator('Inputan Anda tidak boleh ada yang kosong!');
          inputName.value = '';
          inputReview.value = '';
        } else {
          await AddReviewInitiator(url.id, inputName.value, inputReview.value);
          inputName.value = '';
          inputReview.value = '';
        }
      });
    } catch (err) {
      formReviewContainer.style.display = 'none';
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<h2 class="restaurant-error">Oops! Looks like you\'re offline, please check your Internet Connection!</h2>';
    }
  },
};

export default Detail;
