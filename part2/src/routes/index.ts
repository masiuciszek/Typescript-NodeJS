import express from 'express';
import { getStores } from '../controllers/stores';

const router = express.Router();

router.get('/', getStores);

export { router };
