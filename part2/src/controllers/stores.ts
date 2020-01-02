import { Request, Response, NextFunction } from 'express';
import Store, { IStore } from '../models/Store';

// @desc  Get all stores
// @route GET /
// @access Public
interface SuccessResponse {
  success?: boolean;
  count?: number;
  data?: IStore;
}

interface ErrorResponse {
  errMsg: string;
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
    res.status(500).json<ErrorResponse>({ errMsg: 'Server error' });
  }
};

// @desc  Add store
// @route Post /
// @access Public

export const addStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json<SuccessResponse>({
      success: true,
      data: store,
    });
  } catch (err) {
    console.error(err.message);
    if (err.code === 11000) {
      return res.status(400).json<ErrorResponse>({ errMsg: 'User error' });
    }
    res.status(500).json<ErrorResponse>({ errMsg: 'Server error' });
  }
};
