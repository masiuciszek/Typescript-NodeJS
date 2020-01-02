import { Request, Response, NextFunction } from 'express';
import Store, { IStore } from '../models/Store';

// @desc  Get all stores
// @route GET /api/v1/stores
// @access Public
interface SuccessResponse {
  success: boolean;
  count: number;
  data: IStore;
}

export const getStores = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stores = await Store.find();

    if (!stores) return res.status(401).json({ msg: 'no stores found' });

    return res.status(200).json<SuccessResponse>({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errMsg: 'Server error' });
  }
};
