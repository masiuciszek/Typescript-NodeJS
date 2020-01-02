import express from 'express';
import { getStores, addStore } from '../controllers/stores';

const router = express.Router();

router
  .route('/stores')
  .get(getStores)
  .post(addStore);
// router.post('/stores', addStore);

export { router };
