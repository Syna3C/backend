import { Router, Request, Response, NextFunction } from 'express';
import {dbConnection} from '../server';
/**Test making call
*/
//var request = require('request');
//var url = ('https://raw.githubusercontent.com/mjhea0/typescript-node-api/master/src/data.json');
//var Users;
//request(url, function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//     Users = JSON.parse(body);
//console.log(Users);
//  }
//});
/*
**/
export class UsersRouter {
    router: Router

    /**
     * Initialize the UserRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }
    /**
     * GET all Users.
     */
    public getAll(req: Request, res: Response, next: NextFunction) {
        var db = dbConnection.getDB();
        db.connect()
            .then(function(obj) {
                console.log("testing connection");
                //obj.done(); // success, release the connection;
            })
            .catch(function(error) {
                console.log("ERROR:", error.message);
            });
        //res.send(Users);
        db.any('SELECT * FROM public."Users"')
            .then(function(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'Retrieved ALL Users'
                    });
                console.log(data);
            })
            .catch(function(err) {
                return next(err);
            });
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }

}

// Create the UserRouter, and export its configured Express.Router
const userRoutes = new UsersRouter();
userRoutes.init();

export default userRoutes.router;
