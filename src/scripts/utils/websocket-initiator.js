import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    NotificationHelper.sendNotification({
      title: 'Notif from WebSocket',
      options: {
        body: message.data,
        icon: '../public/icons/icon-192x192.jpg',
        image: '../public/images/hero-image-2.jpg',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
