const { env } = require('../utils/env')
let host,
    user,
    password,
    database,
    port
if (env === 'dev') {
    host = 'localhost'
    user = 'root',
    password = 'password',
    database = 'book',
    port = 3306
} else if (env === 'prod') {
    host = '39.99.252.172'
    user = 'root',
    password = '1chtAJF8',
    database = 'book',
    port = 3306
}

module.exports = {
    host,
    user,
    password,
    database,
    port
}