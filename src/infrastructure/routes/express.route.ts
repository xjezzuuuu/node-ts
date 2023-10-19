import { Router } from 'express';
import { ExpressController } from '../controllers/express.controller';

const router = Router();
const controller = new ExpressController();

router.get('/', controller.getAll);

export default router;
