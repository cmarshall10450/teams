const {
    AuthenticationService,
    JWTStrategy
} = require('@feathersjs/authentication');
const {
    expressOauth
} = require('@feathersjs/authentication-oauth')
const {
    GoogleStrategy
} = require('./auth_strategies')

module.exports = app => {
    const authentication = new AuthenticationService(app)

    authentication.register('jwt', new JWTStrategy())
    authentication.register('google', new GoogleStrategy())

    app.use('/authentication', authentication)
    app.configure(expressOauth())
};