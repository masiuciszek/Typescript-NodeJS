/* eslint-disable class-methods-use-this */
import { Router, Request, Response } from 'express';

class LoginController {
  getLogin(req: Request, res: Response): void {
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
  }
}
