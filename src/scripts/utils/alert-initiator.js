const AlertInitiator = (message) => {
  const alertTimeOut = 3000;
  const restaurantAlertContainer = document.querySelector('my-alert');
  restaurantAlertContainer.innerHTML = message;
  restaurantAlertContainer.style.display = 'block';
  setTimeout(() => {
    restaurantAlertContainer.style.display = 'none';
  }, alertTimeOut);
};

export default AlertInitiator;
