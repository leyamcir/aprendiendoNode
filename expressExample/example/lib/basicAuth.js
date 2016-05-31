/**
 * Created by Alicia on 28/04/2016.
 */
"use strict";
var basicAuth = require('basic-auth');

module.exports = function (username, password) {
   return function (req, res, next) {
      var user = basicAuth(req);
       if (!user ||  user.name !== username || user.pass !== password){
           res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
           res.send(401);
           return;
       }
       next();
   };
};