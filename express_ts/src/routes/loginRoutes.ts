import { Router, Request, Response } from 'express';
// Creating on types to make it more typesafe
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('you must provide a email');
  }
});

export { router };
