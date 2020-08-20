import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestauroIdb from '../../src/scripts/data/favorite-restauro-idb';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestauroIdb,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
