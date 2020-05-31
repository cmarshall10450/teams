const users = require('./users/users.service.js');
const subscriptions = require('./subscriptions/subscriptions.service.js');
const channels = require('./channels/channels.service.js');
const messages = require('./messages/messages.service.js');
const teams = require('./teams/teams.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(subscriptions);
  app.configure(channels);
  app.configure(messages);
  app.configure(teams);
};
