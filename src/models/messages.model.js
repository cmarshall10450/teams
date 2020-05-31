const {
    Model
} = require('objection');
const {
    createTableIfNotExists
} = require('../utils/tableUtils')

class Messages extends Model {

    static get tableName() {
        return 'messages';
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

    createTableIfNotExists(db, Messages.tableName, (table) => {
        //columns  
        table.increments('message_id')
        table.integer('channel_id')
        table.integer('team_id')
        table.integer('tenant_id')
        table.integer('user_id')
        table.string('content')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')

        //foreign keys
        table.foreign('channel_id')
            .references('channel.channel_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.foreign('team_id')
            .references('team.team_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.foreign('tenant_id')
            .references('subscription.tenant_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.foreign('user_id')
            .references('user.user_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    return Messages;
};