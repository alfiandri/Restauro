import { itActsAsFavoriteRestauroModel } from './contract/favRestauroContract';
import FavoriteRestauroIdb from '../src/scripts/data/favorite-restauro-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestauroIdb.getAllRestauros()).forEach(async (restaurant) => {
      await FavoriteRestauroIdb.deleteRestauro(restaurant.id);
    });
  });

  itActsAsFavoriteRestauroModel(FavoriteRestauroIdb);
});
