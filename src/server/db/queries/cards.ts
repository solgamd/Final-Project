import { knextion as knex } from '../index';

const getAll = () => knex('cards').select();

const getOne = (id: number) => knex('cards').select().limit(1).where({ id });

export default {
    getAll,
    getOne
}