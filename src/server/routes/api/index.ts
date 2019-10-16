import { Router} from 'express';
import cardsRouter from './cards';

const router = Router();

router.use('/cards', cardsRouter);

export default router;