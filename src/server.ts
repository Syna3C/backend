/**This file is for implementing the server
to listen for incoming connections*/
import config from './../config/config';
import App from './App';
import * as http from 'http';
import * as debug from 'debug';
import * as pgPromise from 'pg-promise';

///declare global variables
var pgp = require('pg-promise')();
//declaring the connection to the database
var connection = "postgres://postgres:@localhost:5432/s3c_db_dev";
//create database object
var db;
export class dbConnection {
  //constructor
  constructor() {
  } //end of constructor

/**
*
*Function to connect to the DB
*/
public static connectToDb (){
  db = pgp(connection);
  //test the connection to the database
  db.connect()
  .then(function (obj,res) {
        console.log("Connected to Postgres Database");
     })
     .catch(function (error) {
         console.log("ERROR:", error.message);
     });
  //listen for the connection
  const server = http.createServer(App);
  server.listen(config.port, (err) => {
    if (err) {
      console.log(err)
    }
    console.info('Server started on port %s.', config.port)
  })
  }
  /**
  *Function to the the db connections
  */
  public static getDB () {
  db = pgp(connection);
  return db;
  }
}//end of class
//call the function to connect to the db
dbConnection.connectToDb();
