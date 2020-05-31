// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const {
    Model
} = require('objection');

const {
    createTableIfNotExists
} = require('../utils/tableUtils')

class Subscriptions extends Model {

    static get tableName() {
        return 'subscriptions';
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}

module.exports = function(app) {
    const db = app.get('knex');
    createTableIfNotExists(db, Subscriptions.tableName, (table) => {
        table.increments('tenant_id')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')
    })

    return Subscriptions;
};