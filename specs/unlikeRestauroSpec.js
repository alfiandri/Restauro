import FavoriteRestauroIdb from '../src/scripts/data/favorite-restauro-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = `<my-alert></my-alert>
  <div id="likeButtonContainer"></div>`;
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestauroIdb.putRestauro({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestauroIdb.deleteRestauro(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike This Restaurant"]')).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like This Restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="Unlike This Restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestauroIdb.getAllRestauros()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestauroIdb.deleteRestauro(1);
    document
      .querySelector('[aria-label="Unlike This Restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestauroIdb.getAllRestauros()).toEqual([]);
  });
});
