import RestoSource from '../data/resto-source';
import AlertInitiator from './alert-initiator';
import { createReviewTemplate } from '../views/templates/template-creator';

const AddReviewInitiator = async (id, name, review) => {
  const dataInput = {
    id,
    name,
    review,
  };

  try {
    const reviewContainer = document.querySelector('.restaurant-detail-review');
    const addRestoReview = await RestoSource.addReview(dataInput);
    AlertInitiator('Thank you for your review!');
    reviewContainer.innerHTML = '';
    addRestoReview.customerReviews.forEach((custReview) => {
      reviewContainer.innerHTML += createReviewTemplate(custReview);
    });
  } catch (err) {
    console.log(err);
    AlertInitiator('Oops! Looks like something wrong, please try again!');
  }
};

export default AddReviewInitiator;
