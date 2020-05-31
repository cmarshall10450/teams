const createTableIfNotExists = (db, tableName, schema = () => {}) => {
    db.schema.hasTable(tableName).then(exists => {
            if (!exists) {
                db.schema.createTable(tableName, schema)
                    .then(() => console.log(`Created table: ${tableName}`))
                    .catch(e => console.error(`Error creating table: ${tableName}`, e))
            }
        })
        .catch(e => console.error(`Error creating table: ${tableName}`, e))
}

module.exports = {
    createTableIfNotExists
}