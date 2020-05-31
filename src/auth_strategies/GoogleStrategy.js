const {
    OAuthStrategy
} = require('@feathersjs/authentication-oauth')

class GoogleStrategy extends OAuthStrategy {
    async getEntityQuery(profile) {
        return {
            googleId: profile.sub
        }
    }
    async getEntityData(profile) {
        const baseData = await super.getEntityData(profile)
        return {
            ...baseData,
            name: profile.name,
            profile_picture: profile.picture,
            email: profile.email
        }
    }
}

module.exports = GoogleStrategy