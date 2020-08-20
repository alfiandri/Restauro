import { itActsAsFavoriteRestauroModel } from './contract/favRestauroContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestauro(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestauros() {
    return favoriteRestaurants;
  },

  putRestauro(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestauro(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestauro(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestauroModel(FavoriteRestaurantArray);
});
