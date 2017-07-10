import config from './knexfile';
import knex from 'knex';

const connection = knex(config.test);

export default connection;