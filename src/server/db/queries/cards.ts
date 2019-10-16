import { knextion as knex } from '../index';

const getAll = () => knex('cards').select();

export default {
    getAll
}