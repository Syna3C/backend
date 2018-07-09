//import * as schema-js from "schema-js";
var schema = require('js-schema');

var users = schema({
   username:String,
    email:String,
    password:String
});

export default users
