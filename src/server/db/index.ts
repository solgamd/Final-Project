import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);

import cards from './queries/cards';

export default {
    cards
}