const db = require('./Database')

const createItem = (name, description, callback) => {
    constsql = 'INSERT INTO items (name. description) VALUES (?, ?)'
    db.run(sql)
}