// Initializes the `subscriptions` service on path `/subscriptions`
const {
    Subscriptions
} = require('./subscriptions.class');
const createModel = require('../../models/subscriptions.model');
const hooks = require('./subscriptions.hooks');

module.exports = function(app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        id: 'tenant_id'
    };

    // Initialize our service with any options it requires
    app.use('/subscriptions', new Subscriptions(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('subscriptions');

    service.hooks(hooks);
};