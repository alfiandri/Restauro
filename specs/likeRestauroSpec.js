import FavoriteRestauroIdb from '../src/scripts/data/favorite-restauro-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = `<my-alert></my-alert>
  <div id="likeButtonContainer"></div>`;
};

describe('Liking or Adding a Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like This Restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike This Restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestauroIdb.getRestauro(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestauroIdb.deleteRestauro(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestauroIdb.putRestauro({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestauroIdb.getAllRestauros()).toEqual([{ id: 1 }]);

    FavoriteRestauroIdb.deleteRestauro(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestauroIdb.getAllRestauros()).toEqual([]);
  });
});
