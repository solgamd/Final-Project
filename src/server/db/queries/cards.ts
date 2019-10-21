import { knextion as knex } from '../index';

const getAll = () => knex.select('cards');

export default {
    getAll
}