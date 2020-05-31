const {
    Model
} = require('objection')
const {
    createTableIfNotExists
} = require('../utils/tableUtils')

class Users extends Model {

    static get tableName() {
        return 'users'
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}

module.exports = function(app) {
    const db = app.get('knex')
    createTableIfNotExists(db, Users.tableName, (table) => {
        table.increments('user_id')
        table.string('googleId')
        table.string('name')
        table.string('email')
        table.string('profile_picture')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')
    })

    return Users
};