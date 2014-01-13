"use strict";
var config = process.config;
var passport = require("passport");
var chkauth = require( config.coreservices + "authentication/chkauth");

module.exports=function( router, controller, view ){



	router.post( "/account",  chkauth, controller );
	router.get(  "/account", chkauth, view );
};