import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default RestoSource;
