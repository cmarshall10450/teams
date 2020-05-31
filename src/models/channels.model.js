const {
    Model
} = require('objection');
const {
    createTableIfNotExists
} = require('../utils/tableUtils')

class Channels extends Model {

    static get tableName() {
        return 'channels';
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}

module.exports = function(app) {
    const db = app.get('knex');

    createTableIfNotExists(db, Channels.tableName, (table) => {
        //columns  
        table.increments('channel_id')
        table.integer('owner_id')
        table.integer('team_id')
        table.string('channel_name')
        table.string('channel_description')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')

        //foreign keys
        table.foreign('owner_id')
            .references('users.user_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.foreign('team_id')
            .references('teams.team_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    return Channels;
}