import * as express from 'express';
import db from '../../db';

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        let [cards]: any = await db.cards.getAll();
        
        res.json({cards});
        console.log(cards);
    } catch (e) {
        console.log(e)
        res.status(500).json('An error occured!')
    }
});

export default router;