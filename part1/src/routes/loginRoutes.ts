import { Router, Request, Response } from 'express';
import requireAuth from '../middleware/requireAuth';
// Creating on types to make it more typesafe
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

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
  if (email && password && email === 'master@gmail.com' && password === 'yoo') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send(`
      <h1>
        Authentication denied!
      </h1>
      <a href="/login" /> Login </a>
    `);
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn === true) {
    res.send(`
            <h1>Welcome Master </h1>
            <a href="/logout" /> Logout  </a>
      `);
  } else {
    res.send(
      `<h1>You are not logged in </h1>
      <a href="/login" /> Login  </a> `
    );
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected route! logged in user');
});

export { router };
