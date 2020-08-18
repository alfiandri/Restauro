import {
  CreateLikeButtonInitiator,
  CreateUnlikeButtonInitiator,
} from '../views/templates/button';
import AlertInitiator from './alert-initiator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer, favoriteRestaurant, restaurant,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestauro(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = CreateLikeButtonInitiator();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestauro(this._restaurant);
      AlertInitiator('Restaurant has been added to favorite!');
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = CreateUnlikeButtonInitiator();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestauro(this._restaurant.id);
      AlertInitiator('Restaurant has been deleted from favorite!');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
