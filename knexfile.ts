import { Knex } from 'knex';

const config: Knex.Config = {
    client: 'pg',
    connection: {
        database: 'qp_assessment',
        user: 'mridul',
        password: '',
        host: 'localhost',
        port:  5432,
    },
    migrations: {
        tableName: 'migrations',
        directory: './src/migrations'
    },
}

export default config;