import { Router, Request, Response } from 'express';
import requireAuth from '../middleware/requireAuth';

// Creating on types to make it more typesafe
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.send('How are you');
});

router.post('/test', async (req: Request, res: Response) => {
  res.send('hello');
});

export { router };
