import {Router, Request, Response, NextFunction} from 'express';
var request = require('request');
var url = ('https://raw.githubusercontent.com/mjhea0/typescript-node-api/master/src/data.json');
var Users;
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     Users = JSON.parse(body);
     console.log(Users);
  }
});
export class UsersRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Users);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const userRoutes = new UsersRouter();
userRoutes.init();

export default userRoutes.router;
