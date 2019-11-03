require('dotenv').config();

export default {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        database: process.env.DB_NAME,
        charset: 'utf8',
    },
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations',
    },
    searchPath: ['knex', 'public'],
    debug: true
};
