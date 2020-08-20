const itActsAsFavoriteRestauroModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestauro({ id: 1 });
    favoriteRestaurant.putRestauro({ id: 2 });

    expect(await favoriteRestaurant.getRestauro(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestauro(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestauro(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestauro({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestauros()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestauro({ id: 1 });
    favoriteRestaurant.putRestauro({ id: 2 });

    expect(await favoriteRestaurant.getAllRestauros()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestauro({ id: 1 });
    favoriteRestaurant.putRestauro({ id: 2 });
    favoriteRestaurant.putRestauro({ id: 3 });

    await favoriteRestaurant.deleteRestauro(1);

    expect(await favoriteRestaurant.getAllRestauros()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putRestauro({ id: 1 });
    favoriteRestaurant.putRestauro({ id: 2 });
    favoriteRestaurant.putRestauro({ id: 3 });

    await favoriteRestaurant.deleteRestauro(4);

    expect(await favoriteRestaurant.getAllRestauros()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestauroModel };
