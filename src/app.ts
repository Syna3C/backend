"use strict";

import * as express from "express";
//import * as Route from "./routes/route";
import config from './../config/config'
import UserRouter from './routes/UserRouter';
//import * as path from "path";
//import * as bodyParser from "body-parser";
/**
 * The server.
 *
 * @class Server
 */
class App {
  //reference to Express instance
  public express: express.Application;

  /**
   * Constructor.
   *
   */
  constructor() {
    //create expressjs application
    this.express = express();
    //configure application
    //this.config();
    //configure routes
    this.routes();
  } //end of constructor
  /**
   * Configure routes for API calls
   */
  private routes():void {
    //get router
    let router =  express.Router();
    //router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message:'Hello World'
      });
    });
    //homepage route
    this.express.use('/', router);
    //users route
    this.express.use('/api/v1/users', UserRouter);
  }//end of routes function
}//end of class

//export = Server;
export default new App().express;
