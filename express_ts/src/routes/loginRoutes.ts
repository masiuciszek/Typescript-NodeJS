import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.send('Hello');
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="post" action="/login">
    <div class="form-group">
      <input name="email" type="email" placeholder="email">
    </div>
    <div class="form-group">
      <input name="password" type="password" placeholder="password" >
    </div>
    <button type="submit">Submit</button>
</form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  res.send(`${email} ${password}`);
});

export { router };
