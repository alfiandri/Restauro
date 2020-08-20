const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You don\'t have any favorite Restaurant, please find one at\nHome';

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('.restaurant-list');
  I.see(firstCondition, '.restaurant-error');
});

Scenario('liking one restaurant', async (I) => {
  I.see(firstCondition, '.restaurant-error');

  I.amOnPage('/');

  I.seeElement('.restaurant-item a');
  const firstCard = locate('.restaurant-name').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedCardTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(firstCondition, '.restaurant-error');

  I.amOnPage('/');

  // melihat section restaurant pertama dan menuju ke halaman detail restaurant
  I.seeElement('.restaurant-item a');
  const firstCard = locate('.restaurant-name').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melakukan klik pada button like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedCardTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik section restaurant yang terdapat pada halaman favorite
  I.click(likedCardTitle);

  // melakukan unlike terhadap restaurant yang terdapat pada halaman favorite
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
  const noFavRestaurant = await I.grabTextFrom('.restaurant-error');

  // melakukan pengecekan halaman favorite dan berhasil melakukan unlike
  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer Review', async (I) => {
  I.see(firstCondition, '.restaurant-error');

  I.amOnPage('/');

  I.seeElement('.restaurant-item a');
  const firstCard = locate('.restaurant-name').first();
  I.click(firstCard);

  I.seeElement('.restaurant-form-review form');

  const textReview = 'Customer Review from E2E Testing';
  I.fillField('name', 'Alfiandri Putra');
  I.fillField('review', textReview);

  I.click('#submit');

  const lastReview = locate('.restaurant-review-text').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
