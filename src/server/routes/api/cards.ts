import * as express from 'express';
import db from '../../db';

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        let cards = await db.cards.getAll();
        res.json(cards);
    } catch (e) {
        console.log(e)
        res.status(500).json('An error occured!')
    }
});

router.get('/:id', async (req: any, res, next) => {
    try {
        let cards = await db.cards.getOne(req.params.id);
        res.json(cards);
    } catch (e) {
        console.log(e)
        res.status(500).json('An error occured!')
    }
});

export default router;