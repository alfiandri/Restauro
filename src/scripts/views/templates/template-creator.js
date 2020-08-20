import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const restauranRating = restaurant.rating;
  let ratingHtml = '';

  for (let i = 1; i < 6; i++) {
    if (restauranRating < i) {
      if (Math.round(restauranRating) === i) {
        ratingHtml += '<i class="fa fa-star-half 2x" aria-hidden="true" style="color: orange;"></i>';
      } else {
        ratingHtml += '<i class="fa fa-star-o 2x" aria-hidden="true" style="color: orange;"></i>';
      }
    } else {
      ratingHtml += '<i class="fa fa-star 2x" aria-hidden="true" style="color: orange;"></i>';
    }
  }

  return `
    <div>
      <h2 class="restaurant-detail-title">${restaurant.name}</h2>

      <div class="restaurant-detail-card">
        <div class="retaurant-detail-1">
          <div class="badge">${restaurant.city}</div>
          <div class="restaurant-detail-rating" aria-label="Rating Restaurant ${restaurant.name} ${restauranRating}">${ratingHtml} (${restauranRating})</div>
          <img class="restaurant-detail-image" alt="Image ${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
        </div>
        <div>
          <ul class="restaurant-detail-info">
            <li><span><i title="address" class="fa fa-map-marker"></i> ${restaurant.address}</span></li>
            
            <li><p><strong>About ${restaurant.name} :</strong> ${restaurant.description}</p></li>

            <li>${restaurant.categories
    .map(
      (category) => `
                  <span class="restaurant-category-menu">${category.name}</span>
                `,
    )
    .join('')}
            </li>
          </ul>
        </div>
      </div>

      <h3 class="restaurant-menu">Pick Your Menu</h3>

      <div class="restaurant-detail-menu">
        <div class="restaurant-detail-food">
          <h4>Foods</h4>
          <ul>
            ${restaurant.menus.foods
    .map(
      (food) => `
                  <li>${food.name}</li>
                `,
    )
    .join('')}
          </ul>
        </div>
        <div class="restaurant-detail-drink">
          <h4>Drinks</h4>
          <ul>
            ${restaurant.menus.drinks
    .map(
      (drink) => `
                  <li>${drink.name}</li>
                `,
    )
    .join('')}
          </ul>
        </div>
      </div>

      <h3 class="restaurant-title-review">Customer Reviews</h3>
      <div class="restaurant-detail-review">
      ${restaurant.consumerReviews
    .map(
      (review) => `
        <div class="restaurant-detail-review-item">
          <div class="restaurant-review-body">
            <p class="restaurant-review-name">@${review.name} says</p>
            ${review.review}
            <p class="restaurant-review-date">${review.date}</p>
          </div>
        </div>
      `,
    )
    .join('')}
      </div>
    </div>`;
};

const createRestaurantItemTemplate = (restaurant) => {
  const limitDescription = `${restaurant.description.slice(0, 200)}...`;

  const restauranRating = restaurant.rating;
  let ratingHtml = '';

  for (let i = 1; i < 6; i++) {
    if (restauranRating < i) {
      if (Math.round(restauranRating) === i) {
        ratingHtml += '<i class="fa fa-star-half 2x" aria-hidden="true" style="color: orange;"></i>';
      } else {
        ratingHtml += '<i class="fa fa-star-o 2x" aria-hidden="true" style="color: orange;"></i>';
      }
    } else {
      ratingHtml += '<i class="fa fa-star 2x" aria-hidden="true" style="color: orange;"></i>';
    }
  }

  return `
    <article class="restaurant-item">
      <a href="#/detail/${restaurant.id}">
        <div class="restaurant-card">
          <div class="badge">${restaurant.city}</div>
          <div class="restaurant-tumb">
            <img
              class="lazyload"
              src="./images/placeholder-medium.jpg"
              data-src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}"
              crossorigin="anonymous"
              alt="Gambar Restoran ${restaurant.name}"
            />
          </div>
          <div class="restaurant-details">
            <span class="restaurant-rating" aria-label="Rating Restaurant ${restaurant.name} ${restauranRating}">${ratingHtml} (${restauranRating})</span>
            <h2 class="restaurant-name">${restaurant.name}</h2>
            <p>${limitDescription}</p>
          </div>
        </div>
      </a>
    </article>`;
};

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <article class="restaurant-item">
        <div class="restaurant-card">
          <div class="badge">Lorem</div>
          <div class="restaurant-tumb">
            <img
              src="./images/placeholder-medium.jpg"
              alt="Skeleton"
              srcset="./images/placeholder-small.jpg 480w, ./images/placeholder-medium.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              crossorigin="anonymous"
            />
          </div>
          <div class="restaurant-details">
            <h2 class="restaurant-name skeleton">Lorem ipsum dolor sit</h2>
            <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
        </div>
      </article>
  `;
  }
  return template;
};

const createReviewTemplate = (custReview) => `
  <div class="restaurant-detail-review-item">
    <div class="restaurant-review-body">
      <p class="restaurant-review-name">@${custReview.name} says</p>
      <span class="restaurant-review-text">${custReview.review}</span>
      <p class="restaurant-review-date">${custReview.date}</p>
    </div>
  </div>
  `;

export {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantDetailTemplate,
  createReviewTemplate,
};
