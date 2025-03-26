//write code to import .env file
require('dotenv').config();


module.exports = {
  WebsocketEndpoint: process.env.WEB_SOCKET_ENDPOINT,
};
