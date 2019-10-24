import * as express from 'express';
import db from '../../db';

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        let cards = await db.cards.getAll();
        console.log(cards);
        res.json(cards);
    } catch (e) {
        console.log(e)
        res.status(500).json('An error occured!')
    }
});

export default router;