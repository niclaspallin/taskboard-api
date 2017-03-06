import config from './config';
import knex from 'knex';

const connection = knex(config.development);

export default connection;