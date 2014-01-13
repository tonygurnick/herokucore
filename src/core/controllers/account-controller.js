
"use strict";

require("colors");

var config = process.config;

var User  = require( config.coremodels+"user");

module.exports = function(req,res,next){


	next();
};