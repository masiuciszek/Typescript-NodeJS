import * as express from 'express';

const requestLogger = (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  console.info(`${req.method} `);
  const start = new Date().getTime();

  next();
};

export { requestLogger };
