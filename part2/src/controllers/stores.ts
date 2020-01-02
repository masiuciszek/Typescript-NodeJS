import { Request, Response, NextFunction } from 'express';
// @desc  Get all stores
// @route GET /api/v1/stores
// @access Public

export const getStores = (req: Request, res: Response, next: NextFunction) => {
  res.send('getStores');
};
