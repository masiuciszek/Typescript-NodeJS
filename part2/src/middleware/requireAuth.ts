import { Request, NextFunction, Response } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
  }
  res.status(403).send('Auth denied!');
}

export default requireAuth;
